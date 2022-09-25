import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const global = css`
  ${emotionReset},
  html, body, #root, #root>div {
    color: black;
    margin: 0vw;
    font-family: "Helvetica Neue";
  }

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  pre {
    margin: 30px 0;
    font-size: 20px;
  }
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
`;

export { global };
