import type { BaseClient } from "@/lib/BaseClient";
import type { EventHandler } from "@/lib/EventHandler";
import { Team } from "discord.js";

export const StartupHandler: EventHandler<BaseClient, "ready"> = async (client, readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);

  const app = await readyClient.application.fetch();
  if (app.owner instanceof Team) {
    for (const [_, owner] of app.owner.members) {
      client.owners.push(owner.id);
    }
  } else {
    if (app.owner) {
      client.owners.push(app.owner.id);
    }
  }
  console.log(`Successfully loaded ${client.owners.length} application owners`);
};
