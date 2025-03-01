import { commands } from "@/commands";
import { env } from "@/env";
import { registerGlobalCommands } from "@/lib/CommandHandler";

(async () => {
  try {
    const options = [...commands().values()].map((cmd) => cmd.options);
    await registerGlobalCommands(env.DISCORD_TOKEN, env.DISCORD_APPLICATION_ID, options);
  } catch {
    process.exit(1);
  }
})();
