exports.getHomePage = (req, res) => {
  res.render("index", { title: "hey", message: "Hello world" });
};
