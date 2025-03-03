import type { BaseClient } from "@/lib/BaseClient";
import type { CommandHandler } from "@/lib/CommandHandler";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";

export const BuildingCommand: CommandHandler<BaseClient> = {
  options: {
    name: "building",
    // TODO: May remove upgrade, since it won't be supported in initial release
    description: "Purchase and upgrade buildings",
    integrationTypes: [0],
    type: ApplicationCommandType.ChatInput,
    options: [
      {
        name: "purchase",
        description: "Purchase a building",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "building",
            description: "Building to purchase",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
        ],
      },
      {
        name: "info",
        description: "Info about a building",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "building",
            description: "Building to view info about",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
        ],
      },
    ],
  },
  async chatInput(client, interaction, args) {
    await interaction.reply({ content: "Command not implemented yet." });
  },
};
