const { Router } = require("express");

const {
  renderDashboard,
  renderEditBlog,
  createBlog,
  renderBlog,
} = require("../../controllers/html/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/dashboard/edit/:id", renderEditBlog);
router.get("/create-blog", createBlog);
router.get("/blog/:id", renderBlog);

module.exports = router;
