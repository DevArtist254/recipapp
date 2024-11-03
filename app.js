const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  res.setHeader(
    "Content-Security-Policy",
    "default-src script-src 'self' data https://apis.google.com "
  );
  next();
});


app.get('/', (req, res) => {
    res.render('index', { title: 'hey', message: 'Hello world'});
})

module.exports = app;