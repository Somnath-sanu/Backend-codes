//Middleware
//used to filter response and request and to check authentication

const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please enter age");
  } else {
    next();
  }
};

app.use(reqFilter);

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

// app.listen(5000);
