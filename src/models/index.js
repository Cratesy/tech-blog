const blogs = require("./blogs");
const User = require("./user");

blogs.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(blogs, {
  foreignKey: "user_id",
});

module.exports = { User, blogs };
