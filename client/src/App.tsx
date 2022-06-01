import React from "react";
import { Grid, Cell } from "styled-css-grid";
import * as C from "./components";
import { SIZE } from "./constants/theme";

function App() {
  return (
    <Grid>
      <Cell width={12}>
        <C.Box>
          <C.Tag mr={SIZE[1]} bg="#0048ff" label={"Typescript"} />
          <C.Tag mr={SIZE[1]} bg="#44ff00" label={"React"} />
          <C.Tag border label={"16/06/2022"} />
        </C.Box>
      </Cell>
      <Cell width={12}>
        <C.Box mt={50} p={20} borderBottom={1} borderStyle={"solid"}>
          <C.H1>H1 TITLE</C.H1>
          <C.Tag mr={SIZE[1]} bg="#0048ff" label={"Typescript"} sm />
          <C.H2>H2 TITLE</C.H2>
          <C.Button>H2 TITLE</C.Button>
        </C.Box>
      </Cell>
      <Cell width={12}>
        <C.Box mt={50}>
          <C.Paragraph>
            I am a London based Web Developer. Mostly working across (but not
            limited to) the food, drink, hospitality and lifestyle sectors, with
            experience in graphic and editorial design for screen and print.
          </C.Paragraph>
        </C.Box>
      </Cell>
    </Grid>
  );
}

export default App;
