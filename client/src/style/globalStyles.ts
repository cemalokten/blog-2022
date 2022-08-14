import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: black;
    margin: 0vw;
    font-family: Luculent;
  }
`;

export default GlobalStyle;
