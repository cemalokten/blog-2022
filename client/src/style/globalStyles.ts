import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const global = css`
  ${emotionReset},
  html, body, #root, #root>div {
    color: black;
    margin: 0vw;
    font-family: "Helvetica Neue";
    height: 100vh;
  }

  p {
    margin-bottom: 20px;
  }

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  pre {
    margin: 30px 0;
    font-size: 20px;
  }
`;

export { global };
