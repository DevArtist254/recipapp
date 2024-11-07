const express = require("express");
const { getHomePage } = require("../controllers/viewController");

const route = express.Router();

route.get("/", getHomePage);

module.exports = route;