export const postData = async (
  entity,
  text,
  postId,
  userId,
  title,
  firstName,
  lastName,
  username,
  email,
  password
) => {
  try {
    const response = await fetch(`/${entity}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: entity === "posts" ? title : undefined,
        text: text,
        postId: entity === "comments" ? postId : undefined,
        userId: userId,
        name: firstName,
        surname: lastName,
        username: username,
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Sunucu hatası:", errorText);
      return false;
    }
    
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
