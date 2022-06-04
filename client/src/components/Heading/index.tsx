import React from "react";
import { FC } from "react";
import { Props } from "../../constants/Types";
import * as C from "../../components";
import { Cell } from "styled-css-grid";
import { SIZE } from "../../constants/theme";

const Heading: FC<Props> = () => {
  return (
    <>
      <Cell width={12}>
        <C.Box
          p={SIZE[2]}
          borderBottom={1}
          borderStyle="solid"
          justifyContent="center"
          alignItems="center"
          position="sticky"
          top={0}
        >
          <C.Arrow position="absolute" left={0}>
            ⇽{" "}
          </C.Arrow>
          <C.H1>Example Heading</C.H1>
          <C.Box height="100%" position="absolute" right={SIZE[2]} bg="black">
            <C.Arrow> ⇾</C.Arrow>
          </C.Box>
        </C.Box>
      </Cell>
    </>
  );
};

export { Heading };
