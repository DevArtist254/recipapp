const Recipe = require("../model/recipeModel");

exports.getRecipes = async (req, res) => {
  try {
    const data = await Recipe.find({name: req.query.name});

    res.status(200).json({
      status: "success",
      size: data.length,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.postRecipe = async (req, res) => {
  try {
    const data = await Recipe.create(req.body);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
