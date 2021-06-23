const { Router } = require("express");

const {
  handleDeleteComment,
  handleCommentForPost,
} = require("../../controllers/api/comments");

const router = Router();

router.delete("/:id", handleDeleteComment);

router.post("/", handleCommentForPost);

module.exports = router;
