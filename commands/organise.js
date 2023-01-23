const fs = require("fs")
const path = require("path")
const chalk = require("chalk")
const utility = require("../utility")

let destPath

function organiseFn(dirPath){
    if(dirPath==undefined){
        destPath = process.cwd()
        console.log(chalk.red("Please enter a path"))
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath)
        if(doesExist){
             destPath = path.join(dirPath, "organized_files")
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath);
            }
        }
        else{
            console.log(chalk.red("Please enter a valid path"))
            return;
        }
    }
    organiseHelper(dirPath, destPath)
}




function organiseHelper(src, dest){
    let childName = fs.readdirSync(src)
    for(let i=0; i<childName.length; i++){
        let childAddr = path.join(src, childName[i])
        if(fs.lstatSync(childAddr).isFile()){
            let category = getCategory(childAddr)
            sendFiles(childAddr, dest, category);
        }
    }
}

function getCategory(name){
    let ext = path.extname(name)
    ext = ext.slice(1)
    
    for(let type in utility.types){
        let currentType = utility.types[type]
        for(let i=0; i<currentType.length; i++){
            if(ext == currentType[i]){
                return type;
            }
        }
    }
    return "others"
}

function sendFiles(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category)
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath)
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(chalk.yellow(`${fileName} copied to ${category}`));
}

module.exports = {
    organise : organiseFn
}
