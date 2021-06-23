const onDelete = async (event) => {
  const id = event.currentTarget.id;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      blog_id: id,
    }),
  };

  const response = await fetch(`/api/blogs/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED DELETE");
  } else {
    window.location.replace("/dashboard");
  }
};

const onEditBlog = async (event) => {
  event.preventDefault();

  const id = event.currentTarget.id;

  const title = $("#title").val();
  const description = $("#description").val();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      description,
    }),
  };

  const response = await fetch(`/api/blogs/${id}`, options);

  if (response.status !== 200) {
    console.log("FAILED UPDATE");
  } else {
    window.location.replace("/dashboard");
  }
};

const addComment = async (event) => {
  event.preventDefault();

  const { id } = event.currentTarget;
  const message = $("#comment").val();

  const requestBody = { message, blog_id: id };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };

  const response = await fetch(`/api/comments`, options);

  if (response.status === 200) {
    window.location.replace(window.location.pathname);
  } else {
    console.log("Failed to post comment");
  }
};

const deleteComment = async (event) => {
  const { id } = event.currentTarget;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  };

  const response = await fetch(`/api/comments/${id}`, options);

  if (response.status === 200) {
    window.location.replace(window.location.pathname);
  } else {
    console.log("Failed to delete comment");
  }
};

const addBlog = async (event) => {
  event.preventDefault();

  const title = $("#title").val();
  const description = $("#description").val();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      title,
      description,
    }),
  };

  const response = await fetch(`/api/blogs`, options);

  if (response.status === 200) {
    window.location.replace("/dashboard");
  } else {
    console.log("Failed to add blog");
  }
};

$('form[name="create-blog"]').submit(addBlog);
$('[name="delete-comment-btn"]').click(deleteComment);
$('form[name="comment-form"]').submit(addComment);
$('[name="delete-btn"]').click(onDelete);
$('[name="edit-blog-form"]').submit(onEditBlog);
