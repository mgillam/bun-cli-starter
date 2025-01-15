import { Command } from "commander";
import helloCommand from "./commands/hello";

const program = new Command();

program
    .name("myapp" + (Bun.env.PRERELEASE_LABEL ? `-${Bun.env.PRERELEASE_LABEL}` : ""))
    .version(Bun.env.VERSION || "0.0.0")
    .description("My cli tool");

program.addCommand(helloCommand);

program.parse();
