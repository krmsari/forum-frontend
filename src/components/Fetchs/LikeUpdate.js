export const updateData = async (
    postId,
    userId,
    isLiked
  ) => {
    try {
      const response = await fetch(`/likes/post/${postId}/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isLiked: isLiked,
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
  