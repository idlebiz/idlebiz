import type { BaseClient } from "@/lib/BaseClient";
import type { CommandHandler } from "@/lib/CommandHandler";
import { ApplicationCommandType } from "discord.js";

export const MaterialsCommand: CommandHandler<BaseClient> = {
  options: {
    name: "materials",
    description: "View all materials in your inventory",
    integrationTypes: [0],
    type: ApplicationCommandType.ChatInput,
  },
  async chatInput(client, interaction, args) {
    await interaction.reply({ content: "Command not implemented yet." });
  },
};
