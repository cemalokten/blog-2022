import type { ComponentStyleConfig } from "@chakra-ui/theme";
import { P } from "../../constants/theme";

const Link: ComponentStyleConfig = {
  baseStyle: {
    borderBottom: "0px solid transparent",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: "0.02em",
    pointerEvents: "auto",
    textAlign: "left",
    transition: "color 100ms ease-in-out",
    fontSize: P,

    _hover: {
      textDecoration: "none",
      color: "blue",
    },

    _active: {
      color: "blue",
      textDecoration: "none",
      borderBottom: "0px solid transparent",
    },
  },
};

export { Link };
