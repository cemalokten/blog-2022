import React from "react";
import { FC } from "react";
import { Props } from "../../constants/Types";
import * as C from "../../components";
import { Cell } from "styled-css-grid";
import { SIZE } from "../../constants/theme";

const Footer: FC<Props> = () => {
  return (
    <>
      <Cell width={12}>
        <C.Box
          p={SIZE[2]}
          borderTop={1}
          borderStyle="solid"
          justifyContent="space-between"
          bottom={0}
          position="fixed"
          width={`calc(100% - ${SIZE[4]})`}
          bg="white"
        >
          <C.Button>GitHub</C.Button>
          <C.Button>Contact</C.Button>
        </C.Box>
      </Cell>
    </>
  );
};

export { Footer };
