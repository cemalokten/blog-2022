import { Box, SimpleGrid, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React, { FC, useEffect, useState } from "react";
import * as C from "../../components";
import { randomColour } from "../../helpers/utils";
import { colors, spacing } from "../../constants/theme";

interface PostsProps {
  posts?: string[];
  filename?: string;
  title?: string;
  date?: string;
  iconColor?: string[];
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
      <SimpleGrid columns={[1, 2, 3, 3]} spacing={spacing} mb={10}>
        {posts.map(({ title, date, filename, iconColor }: PostsProps) => {
          return (
            <Box key={date} mb={4}>
              <NavLink to={`${filename?.slice(0, -3)}`}>
                <C.Icon
                  icon={"post1"}
                  iconColor={iconColor?.[0]}
                  iconWidth="100%"
                  mb={[2, 2]}
                />
              </NavLink>
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
