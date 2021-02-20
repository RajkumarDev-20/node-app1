// console.log('rk');
// const fs=require('fs')
// fs.appendFileSync('notes.txt','hey im from Node.js By Rk')
const rk=require('./notes.js')
const yar=require('yargs')
const chalk=require('chalk')
yar.command({
    command:"add",
    describe:'add',
    builder:{
        title:{
         describe:'title',
         demandOption:true,
         type:"string"   
        }
    },
    handler:(argv)=>{
        rk.addone(argv.title)
console.log(chalk.blue.bgRed.bold(argv.title))
    }
})
yar.command({
    command:"remo",
    describe:'add',
    builder:{
        title:{
         describe:'title',
         demandOption:true,
         type:"string"   
        }
    },
    handler:(argv)=>{
        rk.remove(argv.title)
console.log(chalk.blue.bgRed.bold(argv.title))
    }
})
console.log(yar.parse())
//console.log(rk()) 