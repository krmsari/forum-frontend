export const getData = async (entity,postId) => {
  try {
    const response = await fetch(`/${entity}?postId=${postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Veri getirilirken bir hata oluştu: ', error);
  }
};


