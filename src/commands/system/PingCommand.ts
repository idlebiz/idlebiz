import type { BaseClient } from "@/lib/BaseClient";
import type { CommandHandler } from "@/lib/CommandHandler";
import { ApplicationCommandType } from "discord.js";

export const PingCommand: CommandHandler<BaseClient> = {
  options: {
    name: "ping",
    description: "Healthcheck",
    integrationTypes: [0],
    type: ApplicationCommandType.ChatInput,
  },
  async chatInput(client, interaction, args) {
    const latency = Date.now() - interaction.createdTimestamp;
    await interaction.reply(`Pong! Latency: ${latency}ms`);
  },
};
