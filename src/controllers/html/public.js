const { Blogs, User } = require("../../models");

const transformBlogs = (blog) => {
  return blog.map((blogs) => blogs.get({ plain: true }));
};

const renderHome = async (req, res) => {
  try {
    const blogModel = await Blogs.findAll({
      include: {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    });

    const { isLoggedIn } = req.session;

    const blogs = transformBlogs(blogModel);
    console.log(blogs);

    res.render("home", { isLoggedIn, blogs });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderLogin = (req, res) => {
  try {
    res.render("login", {
      layout: "login",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

const renderSignup = (req, res) => {
  try {
    res.render("sign-up", {
      layout: "sign-up",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = {
  renderHome,
  renderLogin,
  renderSignup,
};
