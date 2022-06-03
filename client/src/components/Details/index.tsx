import React from "react";
import { FC } from "react";
import { Props } from "../../constants/Types";
import * as C from "../../components";
import { Grid } from "styled-css-grid";
import { SIZE } from "../../constants/theme";

const Details: FC<Props> = () => {
  return (
    <>
      <C.Cell width={12} height={6}>
        <C.Box
          pt={SIZE[4]}
          pb={SIZE[4]}
          pl={SIZE[10]}
          pr={SIZE[10]}
          borderBottom={1}
          borderStyle="solid"
          justifyContent="left"
        >
          <Grid columns={12}>
            <C.Cell width={3} mb={SIZE[4]}>
              <C.H2>TOPICS</C.H2>
            </C.Cell>
            <C.Cell width={9}>
              <C.Tag mr={SIZE[2]} bg="#39FF14" label={"React"} />
              <C.Tag mr={SIZE[2]} bg="#0048ff" label={"Typescript"} />
            </C.Cell>
            <C.Cell width={3}>
              <C.H2>DATE</C.H2>
            </C.Cell>
            <C.Cell width={9}>
              <C.Tag mr={SIZE[1]} border label={"16/07/1987"} />
            </C.Cell>
          </Grid>
        </C.Box>
      </C.Cell>
    </>
  );
};

export { Details };
