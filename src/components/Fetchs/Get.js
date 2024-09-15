export const getDatas = async (entity,id) => {
  try {
    const response = await fetch(`/${entity}?postId=${id}`, {
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

export const getData = async (entity) => {
  try {
    const response = await fetch(`/${entity}`, {
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


