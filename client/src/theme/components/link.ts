import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Link: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: "0.02em",
    lineHeight: "45px",
    margin: "0",
    pointerEvents: "auto",
    textAlign: "left",
    transition: "color 100ms ease-in-out",

    _hover: {
      color: "blue",
      textDecoration: "none",
    },

    _active: {
      color: "blue",
      textDecoration: "none",
    },
  },
};

export { Link };
