// npm install ejs

// we can make dynamic page using TEMPLATE ENGINE LIKE ejs,toffee,...

const express = require('express')
const app = express();


app.set('view engine','ejs');

//first parameter view engine is fixed 
//second template name

// app.get('/profile',(req,res)=>{
//     res.render('profile')
// })

// i forgot to comment the above get and was getting errors ufffffffff!!!!!!!!!!

app.get('/profile',(req,res)=>{
    var user = {
        name : "sidhu",
        email : "idontknow@gmail.com",
        mobile : 91919191919,

    }
    res.render('profile',{user} );
})

// app.listen(5000);
