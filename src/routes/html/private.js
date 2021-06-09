const { Router } = require("express");

const {
  renderDashboard,
  renderEditBlog,
} = require("../../controllers/html/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/dashboard/edit/:id", renderEditBlog);

module.exports = router;
