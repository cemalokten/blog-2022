import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const global = css`
  ${emotionReset},
  body {
    color: black;
    margin: 0vw;
    font-family: Akkurat-Mono;
  }
`;

export { global };
