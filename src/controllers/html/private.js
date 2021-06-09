const { User, Blog } = require("../../models");

const renderDashboard = async (req, res) => {
  const { firstName, lastName, userId } = req.session;

  const Blogs = await Blog.findAll({
    where: {
      user_id: userId,
    },
    include: [
      {
        model: User,
      },
    ],
  });

  const formattedBlogs = Blogs.map((Blog) => Blog.get({ plain: true }));

  res.render("dashboard", { firstName, lastName, Blogs: formattedBlogs });
};

const renderEditBlog = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;

  const data = await Blog.findOne({ where: { id, user_id: userId } });

  if (!data) {
    return res.redirect("/dashboard");
  }

  const Blog = data.get({ plain: true });

  res.render("editBlog", Blog);
};

module.exports = { renderDashboard, renderEditBlog };