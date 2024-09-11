export const updateData = async (entity, id, title, text) => {
  try {
    const response = await fetch(`/${entity}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        text: text,
      }),
    })
        if (!response.ok) {
          const errorText = response.text();
          console.error("Sunucu hatası:", errorText);
          return ["Post güncellenemedi!", "error"];
        }
        response.json();
        return ["Post başarıyla güncellendi!", "success"];
  } catch (error) {
    console.log(error);
  }
};
