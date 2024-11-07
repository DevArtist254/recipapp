exports.getRecipes = (req, res) => {
  const rs = req.query.name;

  res.status(200).json({
    status: "success",
    data: {
      message: rs,
    },
  });
};

exports.postRecipe = (req, res) => {
    
}
