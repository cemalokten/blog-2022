import { Box, SimpleGrid, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React, { FC, useEffect, useState } from "react";
import * as C from "../../components";
import { spacing } from "../../constants/theme";
import p from "../../../static/posts/*.md";
import { parseFrontMatterAll } from "../../helpers/utils";

console.log(p, "FILES");

interface PostsProps {
  posts?: string[];
  filename?: string;
  title?: string;
  date?: string;
  iconColor?: string[];
  allPosts?: string[];
}

type Fm = {
  title: string;
  date: string;
  body: string;
  key?: string;
  filename?: string;
};

const Blog: FC = () => {
  const [posts, setPosts] = useState<Fm[]>([]);

  const getPosts = async () => {
    const obj = Object.values(p);
    const allPromise = Promise.all(
      obj.map((key: any) => fetch(key).then((res) => res.text()))
    );
    try {
      const posts1 = await allPromise;
      const postFm = parseFrontMatterAll(posts1, p);
      setPosts(postFm);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 3]} spacing={spacing} mb={10}>
        {posts.map(({ title, date, filename = "" }: Fm) => {
          return (
            <Box key={date} mb={4}>
              <NavLink to={filename}>
                <C.Icon
                  icon={"post1"}
                  // iconColor={iconColor?.[0]}
                  iconWidth="100%"
                  mb={[2, 2]}
                />
              </NavLink>
              <Link as={NavLink} to={filename}>
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
