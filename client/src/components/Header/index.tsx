import React, { FC } from "react";
import { Flex, Heading, Link } from "@chakra-ui/react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { General } from "../../constants/Types";
import { spacing } from "../../constants/theme";

const Header: FC<General> = () => {
  const { title: _title } = useParams();
  const _location = useLocation();

  console.log(_location.pathname);

  const titleAlt = _location.pathname === "/blog" ? "Blog" : "Readme";

  const title = _title
    ?.charAt(0)
    .toUpperCase()
    .concat(_title?.substring(1))
    ?.replaceAll("-", " ");

  return (
    <Flex
      justifyContent="space-between"
      mb={spacing}
      position="relative"
      flexDirection={["column", "row"]}
      lineHeight="45px"
      gap={spacing}
      zIndex="2"
    >
      <Flex>
        <Heading as="h1" fontSize="28px" lineHeight="45px">
          {title ? title : titleAlt}
        </Heading>
      </Flex>
      <Flex gridGap={4}>
        <Link as={NavLink} to="/">
          About
        </Link>
        <Link as={NavLink} to="blog">
          Blog
        </Link>
      </Flex>
    </Flex>
  );
};

export { Header };
