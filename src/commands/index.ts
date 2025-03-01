import { PingCommand } from "@/commands/system/PingCommand";
import { CommandCollection } from "@/lib/CommandHandler";

export function commands() {
  const coll = new CommandCollection();

  coll.add(PingCommand);

  return coll;
}
