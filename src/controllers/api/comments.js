const { Comment } = require("../../models");

const handleDeleteComment = async (req, res) => {
  const { id } = req.params;

  await Comment.destroy({ where: { id } });

  res.status(200).json({ message: "success" });
};

const handleCommentForPost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;
  const { message } = req.body;

  const comment = {
    user_id: userId,
    blog_id: id,
    message,
  };

  await Comment.create(comment);

  res.status(200).json({ message: "success" });
};

(module.exports = handleDeleteComment), handleCommentForPost;
