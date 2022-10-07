import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Lab Mono';
        font-style: normal;
        src: url('./fonts/labmono-regular-web.woff2') format('woff2'), url('./fonts/labmono-regular-web.woff') format('woff');
      }
      `}
  />
);

export default Fonts;
