import type { BaseClient } from "@/lib/BaseClient";
import type { CommandHandler } from "@/lib/CommandHandler";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";

export const MaterialCommand: CommandHandler<BaseClient> = {
  options: {
    name: "material",
    // TODO: May remove upgrade, since it won't be supported in initial release
    description: "View info about a material",
    integrationTypes: [0],
    type: ApplicationCommandType.ChatInput,
    options: [
      {
        name: "info",
        description: "Info about a material",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "material",
            description: "Material to view info about",
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
