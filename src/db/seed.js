require("dotenv").config();
const sequelize = require("../config/connection");
const Blog = require("../models/blogs");
const user = require("../models/user");
const comment = require("../models/comments");
const blogs = require("./blogs.json");
const users = require("./users.json");
const comments = require("./comments.json");

const seed = async () => {
  await sequelize.sync({ force: true });

  await user.bulkCreate(users);

  console.log("Seeded users");

  await Blog.bulkCreate(blogs);

  console.log("Seeded blogs");

  await comment.bulkCreate(comments);

  console.log("Seeded comments");

  process.exit(0);
};

seed();
