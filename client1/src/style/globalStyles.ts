import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 10vw;
    font-family: Luculent;
    font-size: 1.4vw
  }
`;

export default GlobalStyle;
