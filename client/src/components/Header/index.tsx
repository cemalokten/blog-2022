import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Props } from "../../constants/Types";
import * as C from "../../components";

const Header: FC<Props> = () => {
  return (
    <>
      <C.Flex justifyContent="space-between" pt={4} pb={4}>
        <C.Box pl={4}>
          <C.Button>Cemal Okten</C.Button>
        </C.Box>
        <C.Flex gridGap={4} pr={4}>
          <NavLink to="/">
            <C.Button>About</C.Button>
          </NavLink>
          <NavLink to="blog">
            <C.Button>Blog</C.Button>
          </NavLink>
          <C.Button>Email</C.Button>
        </C.Flex>
      </C.Flex>
    </>
  );
};

export { Header };
