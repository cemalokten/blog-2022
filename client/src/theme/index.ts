import { extendTheme } from "@chakra-ui/react";
import { Link } from "./components/link";
import { Text } from "./components/paragraph";
import { Heading } from "./components/heading";

const overrides = {
  components: {
    Link,
    Text,
    Heading,
  },
};

export default extendTheme(overrides);
