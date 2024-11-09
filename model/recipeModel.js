const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  timer: Number,
  servings: Number,
  ingredients: [String]
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;