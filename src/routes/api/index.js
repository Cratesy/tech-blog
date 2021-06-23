const { Router } = require("express");

const blogsRoutes = require("./blogs");
const commentRoutes = require("./comments")

const router = Router();

router.use("/blogs", blogsRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
