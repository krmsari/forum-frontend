import React, { useState, useEffect } from "react";

// getComments fonksiyonunu tanımlayın ve dışa aktarın
export const getComments = async (postId) => {
  try {
    const response = await fetch("/comments?postId=" + postId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data); // Gelen yorumları konsola yazdır
    return data; // Gelen yorumları döndür
  } catch (error) {
    console.error('Yorumlar alınırken bir hata oluştu:', error);
    return [];
  }
};


