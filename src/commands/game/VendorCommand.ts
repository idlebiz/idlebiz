import type { BaseClient } from "@/lib/BaseClient";
import type { CommandHandler } from "@/lib/CommandHandler";
import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";

export const VendorCommand: CommandHandler<BaseClient> = {
  options: {
    name: "vendor",
    description: "Buy and sell materials from the vendor",
    integrationTypes: [0],
    type: ApplicationCommandType.ChatInput,
    options: [
      {
        name: "buy",
        description: "Buy materials from the vendor",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "material",
            description: "Material to buy",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
          {
            name: "amount",
            description: "Amount to buy",
            type: ApplicationCommandOptionType.Integer,
            autocomplete: true,
            required: false,
          },
        ],
      },
      {
        name: "buyall",
        description: "Buy all available materials from the vendor",
        type: ApplicationCommandOptionType.Subcommand,
      },
      {
        name: "sell",
        description: "Sell materials from the vendor",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "material",
            description: "Material to sell",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
          {
            name: "amount",
            description: "Amount to sell",
            type: ApplicationCommandOptionType.Integer,
            autocomplete: true,
            required: false,
          },
        ],
      },
      {
        name: "sellall",
        description: "Sell all available materials from the vendor",
        type: ApplicationCommandOptionType.Subcommand,
      },
    ],
  },
  async chatInput(client, interaction, args) {
    await interaction.reply({ content: "Command not implemented yet." });
  },
};
