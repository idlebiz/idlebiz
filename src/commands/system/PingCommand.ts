import type { BaseClient } from "@/lib/BaseClient";
import type { CommandHandler } from "@/lib/CommandHandler";
import { ApplicationCommandType, MessageFlags } from "discord.js";

export const PingCommand: CommandHandler<BaseClient> = {
  options: {
    name: "ping",
    description: "Healthcheck",
    integrationTypes: [0],
    type: ApplicationCommandType.ChatInput,
  },
  async chatInput(client, interaction, args) {
    const sent = await interaction.deferReply({
      flags: [MessageFlags.Ephemeral],
      withResponse: true,
    });

    await interaction.editReply({
      content: `Pong! Heartbeat: ${interaction.client.ws.ping.toFixed(0)}ms | Roundtrip: ${sent.interaction.createdTimestamp - interaction.createdTimestamp}ms`,
    });
  },
};
