const express = require("express");
const { getRecipes } = require("../controllers/recipeController");

const route = express.Router();

route.get("/", getRecipes);

module.exports = route;