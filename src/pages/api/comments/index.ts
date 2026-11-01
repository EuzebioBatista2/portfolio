import type { NextApiRequest, NextApiResponse } from "next";
import { MongoServerError, MongoServerSelectionError, ObjectId } from "mongodb";
import getMongoClient from "@/lib/mongodb";

type CommentRecord = {
  _id?: ObjectId;
  name: string;
  comment: string;
  avatar?: string;
  createdAt?: Date | string | number | null;
};

type CommentResponse = {
  id: string;
  name: string;
  comment: string;
  avatar?: string;
  createdAt: string;
};

const databaseName = process.env.MONGODB_DB_NAME || "portfolio";
const avatarPattern = /^data:image\/(?:jpeg|png|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/;

function toIsoDate(value: unknown, id?: ObjectId) {
  const date = value instanceof Date
    ? value
    : typeof value === "string" || typeof value === "number"
      ? new Date(value)
      : undefined;

  if (date && Number.isFinite(date.getTime())) return date.toISOString();
  return id?.getTimestamp().toISOString() || new Date(0).toISOString();
}

export const config = {
  api: { bodyParser: { sizeLimit: "5mb" } },
};

export default async function commentsHandler(
  request: NextApiRequest,
  response: NextApiResponse<CommentResponse[] | CommentResponse | { error: string; code?: string }>,
) {
  if (request.method === "GET") response.setHeader("Cache-Control", "no-store, max-age=0");

  if (request.method !== "GET" && request.method !== "POST") {
    response.setHeader("Allow", ["GET", "POST"]);
    return response.status(405).json({ error: "Método não permitido." });
  }

  try {
    const client = await getMongoClient();
    const collection = client.db(databaseName).collection<CommentRecord>("comments");

    if (request.method === "GET") {
      const comments = await collection
        .find({}, { projection: { name: 1, comment: 1, avatar: 1, createdAt: 1 } })
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray();

      return response.status(200).json(comments.map((item) => ({
        id: item._id?.toString() || "",
        name: typeof item.name === "string" ? item.name : "Visitante",
        comment: typeof item.comment === "string" ? item.comment : "",
        avatar: typeof item.avatar === "string" && item.avatar && item._id ? `/api/comments/${item._id}/avatar` : undefined,
        createdAt: toIsoDate(item.createdAt, item._id),
      })));
    }

    const name = typeof request.body?.name === "string" ? request.body.name.trim() : "";
    const comment = typeof request.body?.comment === "string" ? request.body.comment.trim() : "";
    const avatar = typeof request.body?.avatar === "string" ? request.body.avatar : "";

    if (name.length < 2 || name.length > 60) {
      return response.status(400).json({ error: "Informe um nome entre 2 e 60 caracteres." });
    }
    if (comment.length < 4 || comment.length > 1000) {
      return response.status(400).json({ error: "O comentário deve ter entre 4 e 1.000 caracteres." });
    }
    if (avatar && (avatar.length > 4_000_000 || !avatarPattern.test(avatar))) {
      return response.status(400).json({ error: "A imagem deve ser JPG, PNG, WebP ou GIF e ter até 3 MB." });
    }

    const createdAt = new Date();
    const record: CommentRecord = { name, comment, createdAt };
    if (avatar) record.avatar = avatar;
    const result = await collection.insertOne(record);

    return response.status(201).json({
      id: result.insertedId.toString(),
      name: record.name,
      comment: record.comment,
      avatar: record.avatar ? `/api/comments/${result.insertedId}/avatar` : undefined,
      createdAt: createdAt.toISOString(),
    });
  } catch (error) {
    const systemCode = typeof error === "object" && error && "code" in error ? error.code : undefined;
    const systemCall = typeof error === "object" && error && "syscall" in error ? error.syscall : undefined;
    const code = systemCode === "ETIMEOUT" && systemCall === "querySrv"
      ? "MONGODB_DNS_TIMEOUT"
      : error instanceof MongoServerError && error.code === 13
      ? "MONGODB_PERMISSION_DENIED"
      : error instanceof MongoServerSelectionError
        ? "MONGODB_CONNECTION_FAILED"
        : "MONGODB_QUERY_FAILED";
    console.error(`Falha ${request.method} em /api/comments (${code}):`, error);
    return response.status(503).json({ error: "Não foi possível acessar os comentários no momento.", code });
  }
}
