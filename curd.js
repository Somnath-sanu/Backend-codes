//CURD Operations on file


const fs = require('fs')

const path = require('path')

const dirPath = path.join(__dirname,'CURD')
console.log(dirPath) 

const filePath = `${dirPath}/sample.txt`;

// fs.writeFileSync(filePath , "this is a simple path")

// fs.readFile(filePath ,"utf8", (err,item)=>{
//     console.log(item)
// })

//Without using "utf8" >> <Buffer 74 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65 20 70 61 74 68>
// after using >>  this is a simple path

// fs.appendFile(filePath," Appended" , (err)=>{
//     if(!err) console.log("DONE")
// });


// fs.rename(filePath , `${dirPath}/sample2.txt` , (err)=>{
//     if(!err) console.log("DONE")
// })

// fs.unlinkSync(`${dirPath}/sample2.txt`) 

//Buffer is a temproary memory location
