import { env } from "@/env";
import { BaseClient } from "@/lib/BaseClient";

const client = new BaseClient({ intents: [] });

(async () => {
  try {
    await client.login(env.DISCORD_TOKEN);
  } catch {
    await client.destroy();
  }
})();
