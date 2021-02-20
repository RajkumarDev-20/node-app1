const fs=require('fs')
const chalk=require('chalk')
const add=()=>'four notesy'
const remove =(val)=>{
    const notes = loaddata()
    const dup=notes.filter((fil)=>fil.title !== val)
    if(notes.length > dup.length)
    {
    saveData(dup)
    }
    else{
        console.log(chalk.red.bold('No record found!'))    
    }
}
const addone =function (val){

 const notes = loaddata()
 const dup=notes.find((note)=>note.title === val)
 if(dup){
 console.log(chalk.red.bold('Already there!'))
return ;
}
 notes.push({title:val,name:'t'})
console.log(notes);
saveData(notes)
}
saveData=(notes)=>{

const yy=JSON.stringify(notes)
fs.writeFileSync('notes.json',yy)
}
const loaddata=()=>{
try{
    const dg=fs.readFileSync('notes.json')
    const data=dg.toString()
    return JSON.parse(data)
    
    }
    catch(e){
        return []
    }
}
module.exports={add:add,addone:addone,remove:remove}