export const updateData = async (
  entity,
  postId,
  title,
  text,
  userId,
  commentId,
) => {
  try {
    let id = 0;
    switch (entity) {
      case "posts":
        id = postId;
        break;
      case "comments":
        id = commentId;
        break;
      default:
        throw new Error("Entity is not valid!");
    }
    const response = await fetch(`/${entity}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: entity === "posts" ? title : undefined,
        text: text,
        userId: entity === "comments" ? userId : undefined,
        postId: entity === "comments" ? postId : undefined,
        commentId: entity === "comments" ? commentId : undefined,
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Sunucu hatası:", errorText);
      return false;
    }
    await response.json();
    return true;
  } catch (error) {
    console.log(error);
  }
};
