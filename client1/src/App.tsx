import React from "react";
import { Grid, Cell } from "styled-css-grid";
import * as C from "./components";

function App() {
  return (
    <Grid>
      <Cell width={12}>
        <C.Box>
          <C.Tag mr={"3vw"} bg="#0048ff" label={"Typescript"} />
          <C.Tag bg="#44ff00" label={"React"} />
        </C.Box>
      </Cell>
      <Cell width={12}>
        <C.Box mt={50}>
          <C.H1>H1 TITLE</C.H1>
        </C.Box>
      </Cell>
    </Grid>
  );
}

export default App;
