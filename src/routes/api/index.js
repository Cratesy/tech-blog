const { Router } = require("express");

const blogsRoutes = require("./blogs");

const router = Router();

router.use("/blogs", blogsRoutes);

module.exports = router;
