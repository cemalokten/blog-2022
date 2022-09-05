import React, { FC, useEffect, useState } from "react";
import { randomNumber, randomColour } from "../../helpers/utils";
import { Box, SimpleGrid } from "@chakra-ui/react";
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
      <SimpleGrid columns={[1, 3, 4]} spacing={5}>
        {posts.map(({ title, date }) => {
          const bg = randomColour(colors);
          return (
            <Box bg={bg} key={date}>
              <C.Icon icon={"post1"} width="100%" />
              {title}
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export { Blog };
