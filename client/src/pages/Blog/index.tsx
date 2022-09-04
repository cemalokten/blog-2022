import React, { FC, useEffect, useState } from "react";
import { randomNumber, randomColour } from "../../helpers/utils";
import { colors } from "../../constants/theme";
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
      <C.Flex width={[1]} flexWrap={"wrap"}>
        {posts.map(({ title, date }) => {
          const bg = randomColour(colors);
          return (
            <C.Box width={[1, 1 / 3, 1 / 4]} bg={bg} key={date}>
              <C.Icon icon={"post1"} width="100px" />
              {title}
            </C.Box>
          );
        })}
      </C.Flex>
    </>
  );
};

export { Blog };
