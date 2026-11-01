import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var mongoClientPromise: Promise<MongoClient> | undefined;
}

export default async function getMongoClient() {
  const username = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;
  const hosts = process.env.MONGODB_HOSTS;
  const replicaSet = process.env.MONGODB_REPLICA_SET;
  const uri = process.env.MONGODB_URI || (username && password && hosts && replicaSet
    ? `mongodb://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${hosts}/?tls=true&authSource=admin&replicaSet=${encodeURIComponent(replicaSet)}&retryWrites=true&w=majority`
    : undefined);
  if (!uri) {
    throw new Error("Configure MONGODB_URI ou usuário, senha, hosts e replica set do MongoDB.");
  }

  let clientPromise = global.mongoClientPromise;
  if (!clientPromise) {
    clientPromise = new MongoClient(uri).connect();
    global.mongoClientPromise = clientPromise;
    clientPromise.catch(() => {
      if (global.mongoClientPromise === clientPromise) global.mongoClientPromise = undefined;
    });
  }

  return clientPromise;
}
