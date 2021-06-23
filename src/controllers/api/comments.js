const { Comment } = require("../../models");

const handleDeleteComment = async (req, res) => {
  const { id } = req.params;

  await Comment.destroy({ where: { id } });

  return res.status(200).json({ message: "success" });
};

const handleCommentForPost = async (req, res) => {
  const { userId } = req.session;
  const { message, blog_id } = req.body;

  const comment = {
    user_id: userId,
    blog_id,
    message,
  };

  await Comment.create(comment);

  return res.status(200).json({ message: "success" });
};

module.exports = { handleDeleteComment, handleCommentForPost };
