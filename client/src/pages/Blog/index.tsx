import { Box, SimpleGrid, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React, { FC, useEffect, useState } from "react";
import * as C from "../../components";
import {
  randomNumber,
  randomNumberDecimal,
  randomColour,
} from "../../helpers/utils";
import { colors } from "../../constants/theme";

interface PostsProps {
  posts?: string[];
  filename?: string;
  title?: string;
  date?: string;
}

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
      <SimpleGrid columns={[1, 2, 3, 3]} spacing={8} mb={10}>
        {posts.map(({ title, date, filename }: PostsProps) => {
          return (
            <Box key={date} mb={5}>
              <C.Icon
                icon={"post1"}
                iconWidth="100%"
                mb={5}
                iconColor={randomColour(colors)}
              />
              <Link as={NavLink} to={`${filename?.slice(0, -3)}`}>
                {title}
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export { Blog };
