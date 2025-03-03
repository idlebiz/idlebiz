import type { BaseClient } from "@/lib/BaseClient";
import type { CommandHandler } from "@/lib/CommandHandler";
import { ApplicationCommandType } from "discord.js";

export const BuildingsCommand: CommandHandler<BaseClient> = {
  options: {
    name: "buildings",
    description: "Show the buildings you own",
    integrationTypes: [0],
    type: ApplicationCommandType.ChatInput,
  },
  async chatInput(client, interaction, args) {
    await interaction.reply({ content: "Command not implemented yet." });
  },
};
