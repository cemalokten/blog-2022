import * as C from "../../components";
import React, { FC, useEffect, useState } from "react";
import files from "../../../static/posts/*.md";
import { Box, SimpleGrid, Link } from "@chakra-ui/react";
import { Fm } from "../../constants/Types";
import { NavLink } from "react-router-dom";
import { parseFrontMatterAll } from "../../helpers/utils";
import { spacing } from "../../constants/theme";

const Blog: FC = () => {
  const [posts, setPosts] = useState<Fm[]>([]);

  const getPosts = async () => {
    const obj = Object.values(files);
    const allPromise = Promise.all(
      obj.map((key: any) => fetch(key).then((res) => res.text()))
    );
    try {
      const filesContent = await allPromise;
      const fm = parseFrontMatterAll(filesContent, files);
      setPosts(fm);
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
        {posts.map(({ title, date, iconColor, filename = "" }: Fm) => {
          return (
            <Box key={date} mb={4}>
              <NavLink to={filename}>
                <C.Icon
                  icon={"post1"}
                  iconColor={iconColor?.split(",")[0]}
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
