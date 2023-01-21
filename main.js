const chalk = require("chalk")
const fs = require("fs")
const path = require("path")

let inputArr = process.argv.slice(2);
const command = inputArr[0]

let types = {
    video: ['mp4', 'mkv', 'mov', 'avi', 'wmv', 'flv', 'webm'],
    images: ['jpeg', 'jpg', 'png', 'gif', 'tiff', 'psd', 'eps', 'raw', 'ai', 'heif', 'webp', 'bmp', 'svg'],
    audio: ['.aif', '.aiff', '.au', '.flac', '.m4a', '.m4b', '.m4p', '.mp3', '.ogg', '.opus', '.wav', '.wma'],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docx', 'doc', 'pdf', 'xlxs', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb']

}

switch(command){
    case "tree":
        treeFn(inputArr[1])
        break
    
    case "organise":
        organiseFn(inputArr[1])
        break
    
    case "help":
        helpFn()
        break
    
    default:
        console.log(chalk.red(`${inputArr[0]} : Command not recognised`))
}

function treeFn(dirPath){
    console.log("Tree command implemented")
}

function organiseFn(dirPath){
    let destPath;
    if(dirPath==undefined){
        console.log(chalk.red("Please enter a path"))
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath)
        if(doesExist){
            let destPath = path.join(dirPath, "organized_files")
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath);
            }
        }
        else{
            console.log(chalk.red("Please enter a valid path"))
            return;
        }
        organiseHelper(dirPath, destPath)
    }
}

function helpFn(){
    console.log(chalk.blue(`
    List of all commands:
        1. node main.js tree "directoryPath"
        2. node main.js organize "directoryPath"
        3. node main.js help
    `));
}


function organiseHelper(src, dest){
    let childName = fs.readdirSync(src)
    for(let i=0; i<childName.length; i++){
        let childAddr = path.join(src, childName[i])
        if(fs.lstatSync(childAddr).isFile()){
           let category = getCategory(childAddr)
           console.log(`${childName[i]} belongs to ${category}`)
        }
    }
}

function getCategory(name){
    let ext = path.extname(name)
    ext = ext.slice(1)
    
    for(let type in types){
        let currentType = types[type]
        for(let i=0; i<currentType.length; i++){
            if(ext == currentType[i]){
                return type;
            }
        }
    }
    return "others"
}

