import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0vw;
    font-family: Luculent;
    font-size: 1.6vw
  }
`;

export default GlobalStyle;
