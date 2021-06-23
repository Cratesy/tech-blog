const Blogs = require("./blogs");
const User = require("./user");
const Comment = require("./comments");

User.hasMany(Blogs, {
  foreignKey: "user_id",
});

Blogs.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Blogs.hasMany(Comment, {
  foreignKey: "blog_id",
});

Comment.belongsTo(Blogs, {
  foreignKey: "blog_id",
});

module.exports = { User, Blogs, Comment };
