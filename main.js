#!/usr/bin/env node

const helpObj = require('./commands/help')
const treeObj = require('./commands/tree')
const archiveObj = require('./commands/archiver')
const organiseObj = require('./commands/organise')

let inputArr = process.argv.slice(2);
const command = inputArr[0]


switch(command){
    case "tree":
        treeObj.tree(inputArr[1])
        break
        
    case "organise":
        organiseObj.organise(inputArr[1])
        break

    case "archive":
        archiveObj.archiver(inputArr[1], inputArr[2])
        break
        
    case "help":
        helpObj.help()
        break
            
    default:
        console.log(chalk.red(`${inputArr[0]} : Command not recognised`))
}



