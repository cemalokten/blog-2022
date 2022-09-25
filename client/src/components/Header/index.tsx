import { Props } from "../../constants/Types";
import { NavLink } from "react-router-dom";
import { Flex, Box, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import * as C from "../../components";

const Header: FC<Props> = ({ heading }) => {
  return (
    <Flex
      justifyContent="space-between"
      pt={10}
      mb={[10, 8]}
      position="relative"
      flexDirection={["column", "row"]}
      lineHeight="45px"
    >
      <Flex>
        <Link>{heading}</Link>
      </Flex>
      <Flex gridGap={5}>
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
