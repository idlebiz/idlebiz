import type { BaseClient } from "@/lib/BaseClient";
import type { CommandHandler } from "@/lib/CommandHandler";
import { ApplicationCommandType, MessageFlags } from "discord.js";

export const SupportCommand: CommandHandler<BaseClient> = {
  options: {
    name: "support",
    description: "Join IdleBiz support server.",
    integrationTypes: [0],
    type: ApplicationCommandType.ChatInput,
  },
  async chatInput(client, interaction, args) {
    await interaction.reply({
      content: "You can join our support server at <https://discord.gg/JE846Eyusz>.",
      flags: [MessageFlags.Ephemeral],
    });
  },
};
