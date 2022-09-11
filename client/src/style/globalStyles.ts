import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const global = css`
  ${emotionReset},
  html, body, #root, #root>div {
    color: black;
    margin: 0vw;
    font-family: "Akkurat-Mono";
    height: 100vh;
  }
`;

export { global };
