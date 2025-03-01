import { env } from "@/env";
import { mongo } from "@/lib/mongo";
import type { ChangeStream, ChangeStreamDocument, ResumeToken } from "mongodb";

// TODO: fill in collections we wanna watch for changes
const collections: string[] = [];
let streams: Record<string, ChangeStream> = {};
const resumeTokens: Record<string, ResumeToken> = {};

export async function sync() {
  const db = (await mongo()).db(env.MONGO_DATABASE);

  for (const collName of collections) {
    const coll = db.collection(collName);

    const changeStream = coll.watch([], {
      resumeAfter: resumeTokens[collName] || undefined,
    });

    streams[collName] = changeStream;

    changeStream.on("change", (change: ChangeStreamDocument) => {
      if (change._id) {
        resumeTokens[collName] = change._id;
      }

      // TODO: handle change implementation
    });

    changeStream.on("error", () => {
      restartSync();
    });
  }
}

export async function restartSync() {
  await closeSync();
  setTimeout(sync, 5000);
}

export async function closeSync() {
  for (const stream of Object.values(streams)) {
    await stream.close();
  }

  streams = {};
}
