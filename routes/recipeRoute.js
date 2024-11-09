const express = require("express");
const { getRecipes, postRecipe } = require("../controllers/recipeController");

const route = express.Router();

route.get("/", getRecipes);
route.post("/", postRecipe);

module.exports = route;