const Blogs = require("./blogs");
const User = require("./user");
const Comment = require("./comments");

User.hasMany(Blogs, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blogs.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blogs.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Blogs, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

module.exports = { User, Blogs, Comment };
