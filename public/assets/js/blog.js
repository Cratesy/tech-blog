const onDelete = async (event) => {
  const id = event.currentTarget.id;

  const options = {
    method: "DELETE",
    redirect: "follow",
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

  console.log(id, message);

  const requestBody = { message };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(requestBody),
  };
  const response = await fetch(`/api/blogs/${id}/comments`, options);

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

$('[name="delete-comment-btn"]').click(deleteComment);
$('[name="post-comment"]').submit(addComment);
$('[name="delete-btn"]').click(onDelete);
$('[name="edit-blog-form"]').submit(onEditBlog);
