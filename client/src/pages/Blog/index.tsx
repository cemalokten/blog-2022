import React, { FC, useEffect, useState } from "react";
import * as C from "../../components";

const Blog: FC = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await fetch("api/posts");
    if (response.ok) {
      const json = await response.json();
      setPosts(json);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map(({ title, date }) => (
        <C.Box width={1 / 3} key={date}>
          {title}
        </C.Box>
      ))}
    </>
  );
};

export { Blog };
