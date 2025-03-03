import type { BaseClient } from "@/lib/BaseClient";
import type { CommandHandler } from "@/lib/CommandHandler";
import { ApplicationCommandType } from "discord.js";

export const CollectCommand: CommandHandler<BaseClient> = {
  options: {
    name: "collect",
    description: "Collect materials produced by your buildings",
    integrationTypes: [0],
    type: ApplicationCommandType.ChatInput,
  },
  async chatInput(client, interaction, args) {
    await interaction.reply({ content: "Command not implemented yet." });
  },
};
