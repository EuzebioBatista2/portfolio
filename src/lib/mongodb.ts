import { MongoClient } from "mongodb";
import { setServers } from "node:dns";

const configuredDnsServers = process.env.MONGODB_DNS_SERVERS
  ?.split(",")
  .map((server) => server.trim())
  .filter(Boolean);

if (configuredDnsServers?.length) setServers(configuredDnsServers);

declare global {
  // eslint-disable-next-line no-var
  var mongoClientPromise: Promise<MongoClient> | undefined;
}

export default async function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI não foi definida no ambiente.");

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
