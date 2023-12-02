const express = require('express')
const path = require('path')

const app = express();

console.log(__dirname) // C:\Users\somna\Desktop\node-tut\express8


const publicPath = path.join(__dirname,"public")
console.log(publicPath) //C:\Users\somna\Desktop\node-tut\express\public

// app.use(express.static(publicPath));

// If we use get method we dont have to write html extension 
// instead of send we use sendFile


app.get('',(res,rep)=>{
    rep.sendFile(`${publicPath}/home.html`)

})

app.get('/about',(res,rep)=>{
    rep.sendFile(`${publicPath}/about.html`)

})

// for showing custom error page 404 page (if particular page is not available)

app.get('*',(res,rep)=>{
    rep.sendFile(`${publicPath}/pageNotFound.html`)

})








// app.listen(5000);