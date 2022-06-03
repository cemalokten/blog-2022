import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Props } from "../../constants/Types";
import * as C from "../../components";
import { Grid, Cell } from "styled-css-grid";
import { SIZE } from "../../constants/theme";

const Header: FC<Props> = () => {
  return (
    <>
      <Cell width={12}>
        <C.Box
          p={SIZE[2]}
          borderBottom={1}
          borderStyle="solid"
          justifyContent="space-between"
        >
          <C.Button>Info</C.Button>
          <C.Button>Blog</C.Button>
        </C.Box>
      </Cell>
    </>
  );
};

export { Header };
