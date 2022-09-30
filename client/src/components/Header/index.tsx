import React, { FC } from "react";
import { Flex, Heading, Link } from "@chakra-ui/react";
import { NavLink, useParams } from "react-router-dom";
import { General } from "../../constants/Types";
import { spacing } from "../../constants/theme";

const Header: FC<General> = () => {
  const { title: _title } = useParams();

  const title = _title
    ?.replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

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
          {title || "Cemal Okten"}
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
