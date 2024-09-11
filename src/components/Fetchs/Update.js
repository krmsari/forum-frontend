export const updateData = async (entity, id, title, text) => {
  try {
    fetch(`/${entity}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        text: text,
      }),
    }).then((res) => res.json()
    )
  } catch (error) {
    console.log(error);
  }
};
