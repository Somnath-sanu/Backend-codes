// Express js is a framework of Node js

const express = require("express");
const app = express();

//http://localhost:5000/?name=sanu (request)
//req.query =  { name: 'sanu' }
//req.query.name = sanu

// app.get('',(req,res)=>{
//     console.log("data sent by user -->> " , req.query.name)
//     res.send("Home page, Welcome " + req.query.name )
// })

app.get("", (req, res) => {
  res.send(`<h1>Home page</h1> <a href = " /about">Go to about page</a>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About page  </h1>
     <a href =  "/" >Go to home page</a> 
      <br/>
       <a href  = "/help" >Go to help page</a>
       <h2> Welcome ${req.query.name}</h2>`);
});

app.get("/help", (req, res) => {
  res.send(`[
        {name : "hero"},
        {name : nahiPata},
    ]  <a href  = "/" >Go to Home page</a>`);
});

// app.listen(5000);
