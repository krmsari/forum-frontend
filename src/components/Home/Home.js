import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import PostForm from "../Post/PostForm";
import "./home.css";
import { CircularProgress } from "@mui/material";

function Home() {
  const [error, setError] = useState(null); // error state yani, hata durumu
  const [isLoaded, setIsLoaded] = useState(false); // isLoaded state yani, yüklendi mi?
  const [postList, setPostList] = useState([]); // post state yani, veriler

  const refreshPosts = () => {
    fetch("/posts") // verileri çekmek için fetch kullanıyoruz
      .then((res) => res.json()) // gelen veriyi json formatına çeviriyoruz
      .then(
        (result) => {
          setIsLoaded(true); // veriler yüklendi olarak işaretliyoruz
          setPostList(result); // verileri state'e atıyoruz
        },
        (error) => {
          setIsLoaded(true); // hata durumunda da yüklendi olarak işaretliyoruz
          setError(error); // hatayı state'e atıyoruz
        }
      );
  };

 
  useEffect(() => {
      refreshPosts();
  }, [postList]);

  if (error) {
    return <div>Hata: {error.message}</div>; // hata durumunda hata mesajını göster
  } else if (!isLoaded) {
    return (
      <div>
        <CircularProgress />
      </div>
    ); // yükleme durumunda yüklendiğini göster
  } else {
    return (
      <div className="container-home">
        <PostForm author={"kerem"} userId={1} refresh={refreshPosts} />
        {postList.map((post) => (
          <Post
            postId={post.id}
            title={post.title}
            text={post.text}
            author={post.username}
            userId={post.userId}
            refresh={refreshPosts}
          />
        ))}
      </div>
    );
  }
}
export default Home;
