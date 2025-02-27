import { env } from "@/env";
import { MongoClient } from "mongodb";

let _mongo: MongoClient | null = null;

export async function mongo(): Promise<MongoClient> {
  if (!_mongo) {
    _mongo = new MongoClient(env.MONGO_URI, { appName: "IdleBiz" });
    await _mongo.connect();
  }

  return _mongo;
}
