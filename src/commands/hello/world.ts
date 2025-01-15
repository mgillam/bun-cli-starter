import { Command } from "commander";
import inquirer from "inquirer";

const worldCommand = new Command("world")
    .description("Greet the world")
    .argument("[name]", "name to greet")
    .action(async (name) => {
      let greetName = name;
      if(!greetName) {
        const { inputName } = await inquirer.prompt([ 
         { type: "input", name: "inputName", message: "Please provide a name:", default: "World" }
        ]);
        greetName = inputName;
      }
      console.log(`Hello ${greetName}`);
});

export default worldCommand;
