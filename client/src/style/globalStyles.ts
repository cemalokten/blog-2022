import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 20vw;
    font-family: Luculent;
    font-size: 1.5vw
  }
`;

export default GlobalStyle;
