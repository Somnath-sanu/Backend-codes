
const fs = require('fs')

const path = require('path')

const dirPath = path.join(__dirname,'files')
console.log(dirPath) // C:\Users\somna\Desktop\node-tut\files
// const filePath = `${dirPath}/hello.txt`;

for(i = 1 ; i <=5 ; i++ ){
      fs.writeFileSync(dirPath + "/hello" + i + ".txt" , "a simple text file")
//    fs.writeFileSync( filePath  ,  "a simple text file") // same file (only one will be created)
}

fs.readdir(dirPath,(err,files)=>{
    console.log(files) //array of all files

    // files.forEach((item)=>{
    //     console.log("files name is ", item)
    // })
})