import { Props } from "../../constants/Types";
import { NavLink } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import * as C from "../../components";

const Header: FC<Props> = () => {
  return (
    <Flex
      justifyContent="space-between"
      pb={10}
      pt={10}
      zIndex={999}
      position="relative"
    >
      <Box>
        <C.Button>Cemal Okten</C.Button>
      </Box>
      <Flex gridGap={8}>
        <NavLink to="/">
          <C.Button>About</C.Button>
        </NavLink>
        <NavLink to="blog">
          <C.Button>Blog</C.Button>
        </NavLink>
        <C.Button>Email</C.Button>
      </Flex>
    </Flex>
  );
};

export { Header };
