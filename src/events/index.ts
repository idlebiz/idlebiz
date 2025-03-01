import { SlashCommandHandler } from "@/events/SlashCommandHandler";
import { StartupHandler } from "@/events/StartupHandler";
import { EventCollection } from "@/lib/EventHandler";

export function events(): EventCollection {
  const coll = new EventCollection();

  coll.add("ready", StartupHandler);
  coll.add("interactionCreate", SlashCommandHandler);

  return coll;
}
