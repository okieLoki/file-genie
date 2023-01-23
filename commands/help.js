const chalk = require("chalk")

function helpFn(){
    console.log(chalk.green(`File Organizer Command-line Tool`) + '\n');
    console.log(chalk.blue(`This script organizes files in a specified directory. It takes two arguments: a command and a directory path.`) + '\n');
    console.log(chalk.green(`List of all commands:`) + '\n');
    console.log(chalk.green(`1.`) + chalk.white(` node main.js `) + chalk.cyan(`tree`) + chalk.white(` "directoryPath" - `) + chalk.blue(`Displays the directory tree of the directory specified by the path`));
    console.log(chalk.green(`2.`) + chalk.white(` node main.js `) + chalk.cyan(`organize`) + chalk.white(` "directoryPath" - `) + chalk.blue(`Moves all files into folders based on file type`));
    console.log(chalk.green(`3.`) + chalk.white(` node main.js `) + chalk.cyan(`archive`) + chalk.white(` "directoryToArchive" "directoryToPlace" - `) + chalk.blue(`Creates archive of the folder specified`));
    console.log(chalk.green(`4.`) + chalk.white(` node main.js `) + chalk.cyan(`help`) + chalk.white(` - `) + chalk.blue(`Displays the list of all commands`));
}

module.exports={
    help : helpFn
}