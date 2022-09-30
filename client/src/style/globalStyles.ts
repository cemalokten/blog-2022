import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const global = css`
  ${emotionReset},
  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body,
  #root,
  #root > div {
    color: black;
    margin: 0vw;
    font-family: "Helvetica Neue";
    font-size: 28px;
    height: 100%;
  }

  pre {
    margin: 30px 0;
    font-size: 20px;
  }
`;

export { global };
