import { Command } from "commander";
import world from "./world";

const command = new Command("hello")
    .description("hello commands")
    .addCommand(world);

export default command;;
