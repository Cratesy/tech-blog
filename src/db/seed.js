require("dotenv").config();
const sequelize = require("../config/connection");
const blog = require("../models/blogs");
const user = require("../models/user");
const blogs = require("./blogs.json");
const users = require("./users.json");

const seed = async () => {
  await sequelize.sync({ force: true });

  await user.bulkCreate(users);

  console.log("Seeded users");

  await blog.bulkCreate(blogs);

  console.log("Seeded blogs");

  process.exit(0);
};

seed();
