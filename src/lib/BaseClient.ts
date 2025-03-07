import { commands } from "@/commands";
import { events } from "@/events";
import { registerEvents } from "@/lib/EventHandler";
import { Client, type ClientOptions } from "discord.js";

export class BaseClient extends Client {
  public owners: string[] = [];
  public commands = commands();

  constructor(options: ClientOptions) {
    super(options);

    console.log(`Successfully loaded ${events().size} events`);
    registerEvents(this, events());
  }
}
