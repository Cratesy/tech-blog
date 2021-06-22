const { Router } = require("express");

const {
  handleDeleteComment,
  handleCommentForPost,
} = require("../../controllers/api/comments");

const router = Router();

router.delete("/:id", handleDeleteComment);

router.post("/:id/comments", handleCommentForPost);

module.exports = router;
