
export const deleteData = async (entity,id) => {
  try {
    await fetch(`/${entity}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
   
  } catch (error) {
    console.error('Silme işlemi esnasında bir hata oluştu:', error);
  }
};
