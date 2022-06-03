import React from "react";
import { Grid, Cell } from "styled-css-grid";
import * as C from "./components";
import { SIZE } from "./constants/theme";

function App() {
  return (
    <Grid>
      <C.Header />
      <C.Heading />
      <C.Details />
      <Cell width={12}>
        <C.Box mt={50} pl={SIZE[10]} pr={SIZE[10]}>
          <C.Paragraph>
            Hi my name is Cemal (Je-mal), I am a web developer in the making.
            Once upon a time I worked in the design industry, designing
            furniture and products.
          </C.Paragraph>
        </C.Box>
      </Cell>
      <C.Footer />
    </Grid>
  );
}

export default App;
