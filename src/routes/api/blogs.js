const { Router } = require("express");

const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../../controllers/api/blogs");

const router = Router();

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.post("/", createBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
