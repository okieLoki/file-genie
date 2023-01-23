const archiver = require("archiver")
const fs = require("fs")
const chalk = require("chalk")

function archiveFn(src, dest){
    if(src == undefined || dest == undefined){
        console.log(chalk.red("Please enter a valid source and destination path"));
        return;
    }
    if(!fs.existsSync(src)){
        console.log(chalk.red("Please enter a valid source path"));
        return;
    }
    if(fs.existsSync(dest)){
        console.log(chalk.red("Destination path already exists, please provide a new name for the archive"));
        return;
    }
    let output = fs.createWriteStream(dest + '.zip');
    let archive = archiver('zip', {
        zlib: { level: 9 } 
    });
    output.on('close', function() {
        console.log(chalk.green(`Archive created at ${dest} with ${archive.pointer()} total bytes`));
    });
    archive.pipe(output);
    archive.directory(src, false);
    archive.finalize();
}


module.exports = {
    archiver : archiveFn
}