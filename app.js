const express = require("express");
const cors = require("cors");
const path = require("path");

const viewRouter = require("./routes/viewRoute");
const recipeRouter = require("./routes/recipeRoute");

const app = express();

app.use(cors());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: "10kb"}));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  res.setHeader(
    "Content-Security-Policy",
    "default-src script-src 'self' data https://apis.google.com 'unsafe-eval'"
  );
  next();
});


app.use('/', viewRouter);
app.use('/recipes', recipeRouter);

module.exports = app;