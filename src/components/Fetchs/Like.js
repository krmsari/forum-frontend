export const updateLike = async (
  postId,
  userId,
) => {
  try {
    await fetch(`/likes/${userId}/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        postId: postId,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLike = async (
  postId,
  userId,
) => {
  try {
    await fetch(`/likes/${userId}/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
