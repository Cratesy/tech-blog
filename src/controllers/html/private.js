const { User, Blogs, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
  const { firstName, lastName, userId } = req.session;

  const getBlog = await Blogs.findAll({
    where: {
      user_id: userId,
    },
    include: [
      {
        model: User,
      },
    ],
  });

  const formattedBlogs = getBlog.map((Blog) => Blog.get({ plain: true }));

  res.render("dashboard", { firstName, lastName, Blogs: formattedBlogs });
};

const renderEditBlog = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;

  const data = await Blogs.findOne({ where: { id, user_id: userId } });

  if (!data) {
    return res.redirect("/dashboard");
  }

  const Blog = data.get({ plain: true });

  res.render("editBlog", Blog);
};

const renderBlog = async (req, res) => {
  const { id } = req.params;

  const blogFromModel = await Blogs.findByPk(id, {
    include: [
      {
        model: Comment,
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name"],
          },
        ],
      },
      { model: User, attributes: ["first_name", "last_name"] },
    ],
  });

  const blog = blogFromModel.get({ plain: true });

  const comments = blog.comments.map((comment) => {
    return {
      ...comment,
      myComment: req.session.userId === comment.user_id,
    };
  });

  res.render("blog", { ...blog, comments });
};

const createBlog = async (req, res) => {
  res.render("create-blog");
};

module.exports = { renderDashboard, renderEditBlog, createBlog, renderBlog };
