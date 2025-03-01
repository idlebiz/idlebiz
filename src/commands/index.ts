import { PingCommand } from "@/commands/system/PingCommand";
import { SupportCommand } from "@/commands/system/SupportCommand";
import { CommandCollection } from "@/lib/CommandHandler";

export function commands() {
  const coll = new CommandCollection();

  coll.add(PingCommand);
  coll.add(SupportCommand);

  return coll;
}
