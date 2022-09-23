import { Props } from "../../constants/Types";
import { NavLink } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import * as C from "../../components";

const Header: FC<Props> = ({ heading }) => {
  return (
    <Flex
      justifyContent="space-between"
      pt={10}
      mb={[10, 8]}
      zIndex={999}
      position="relative"
      flexDirection={["column", "row"]}
    >
      <Box>
        <C.Button underline>{heading}</C.Button>
      </Box>
      <Flex gridGap={5} mt={[5, 0, 0]}>
        <NavLink to="/">
          <C.Button>About</C.Button>
        </NavLink>
        <NavLink to="blog">
          <C.Button>Blog</C.Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export { Header };
