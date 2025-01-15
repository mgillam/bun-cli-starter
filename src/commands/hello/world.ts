import { Command } from "commander";

const worldCommand = new Command("world")
    .description("Greet the world")
    .argument("[name]", "name to greet")
    .action((name) => {
      console.log(`Hello ${name ?? "World"}`);
});

export default worldCommand;
