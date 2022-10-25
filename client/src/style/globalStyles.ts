import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const global = css`
  ${emotionReset},

  @font-face {
    font-family: "LabMono";
    src: url("./fonts/labmono-regular-web.woff2") format("woff2"),
      url("./fonts/labmono-regular-web.woff") format("woff");
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  :root {
    font-size: 28px;
  }

  html,
  body,
  #root,
  #root > div {
    color: black;
    margin: 0vw;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
    font-size: 1rem;
    height: 100%;
  }

  pre {
    margin: 30px 0;
    font-size: 20px;
  }

  strong {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
    font-weight: bold;
  }

  li {
    list-style: none;
  }
`;

export { global };
