export const postImage = async (entity, image, id) => {
  try {
    const formData = new FormData();
    if (image)
    formData.append("file", image);
    console.log(image);
    //bir MultipartFile nasış post yapılır
    const response = await fetch(`/images/${entity}?id=${id}`, {
      method: "POST",
      body: formData,
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
