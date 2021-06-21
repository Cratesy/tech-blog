const transformBlogs = (blog) => {
  return blog.map((blogs) => blogs.get({ plain: true }));
};

module.export = { transformBlogs };
