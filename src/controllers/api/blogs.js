const { User, Blogs } = require("../../models");

const getBlogs = async (req, res) => {
  try {
    const { userId } = req.session;

    const getBlogs = await Blogs.findAll({
      where: {
        user_id: userId,
      },
      include: [
        {
          model: User,
        },
      ],
    });

    return res.status(200).json(getBlogs);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to get all Blogs" });
  }
};

const getBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const getBlog = await Blogs.findByPk(id, {
      include: [
        {
          model: User,
        },
      ],
    });

    if (!Blog) {
      return res.status(404).json({ error: "Blog does not exist" });
    }
    return res.status(200).json(getBlog);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to get Blogs" });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const { id } = req.params;

    const blog = { title, description, status };

    const [updated] = await Blogs.create(blog, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Blog does not exist" });
    }
    return res.status(200).json({ data: "Update successful" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to create Blog" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const { id } = req.params;

    const blog = { title, description, status };

    const [updated] = await Blogs.update(blog, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Blog does not exist" });
    }
    return res.status(200).json({ data: "Update successful" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to update Blog" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Blogs.destroy({
      where: {
        id,
      },
    });

    if (!data) {
      return res.status(404).json({ error: "Blog does not exist" });
    }

    return res.status(200).json({ data: "Delete successful" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to delete Blog" });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
