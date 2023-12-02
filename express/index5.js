//Route Level Middleware
//Applying middleware on specific routes

//Middleware in different file(Good practice)

const express = require("express");
const app = express();
const reqFilter = require("./middleware");

const route = express.Router(); 
route.use(reqFilter)
//if we wanna apply middleware -->> route.get
//if not -->> app.get


// app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

// Appling middleware in about page only

app.get("/about", reqFilter, (req, res) => {
  res.send("<h1>About page</h1>");
});

route.get("/user", (req, res) => {
  res.send("<h1>User page</h1>");
});

app.use('/',route); // without this ->> Cannot GET /user

app.listen(5000);
