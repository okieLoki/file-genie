const fs = require("fs")
const path = require("path")

function treeFn(dirPath){
    if(dirPath==undefined){
        treeHelper(process.cwd()," ")
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath)
        if(doesExist){
            treeHelper(dirPath, " ")
        }
        else{
            console.log(chalk.red("Please enter a valid path"))
            return;
        }
    }
}

function treeHelper(dirPath, indent){
    if(fs.lstatSync(dirPath).isFile()){
        let fileName = path.basename(dirPath)
        console.log(indent + '├──' + fileName)
    }
    else{
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName)
        let children = fs.readdirSync(dirPath)
        for(let i=0; i<children.length; i++){
            let childPath =  path.join(dirPath, children[i])
            treeHelper(childPath, indent + '\t')
        }
    }
}

module.exports = {
    tree : treeFn
}