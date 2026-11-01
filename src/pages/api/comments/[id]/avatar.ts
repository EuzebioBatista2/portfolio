import type { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";
import getMongoClient from "@/lib/mongodb";

const databaseName = process.env.MONGODB_DB_NAME || "portfolio";
const avatarPattern = /^data:image\/(jpeg|png|webp|gif);base64,([A-Za-z0-9+/]+={0,2})$/;

export default async function commentAvatarHandler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).end();
  }

  const id = typeof request.query.id === "string" ? request.query.id : "";
  if (!ObjectId.isValid(id)) return response.status(404).end();

  try {
    const client = await getMongoClient();
    const comment = await client.db(databaseName).collection("comments").findOne(
      { _id: new ObjectId(id) },
      { projection: { avatar: 1 } },
    );
    const match = typeof comment?.avatar === "string" ? avatarPattern.exec(comment.avatar) : null;
    if (!match) return response.status(404).end();

    response.setHeader("Content-Type", `image/${match[1]}`);
    response.setHeader("Cache-Control", "public, max-age=86400, stale-while-revalidate=604800");
    return response.status(200).send(Buffer.from(match[2], "base64"));
  } catch (error) {
    console.error("Falha ao carregar imagem do comentário:", error);
    return response.status(503).end();
  }
}
