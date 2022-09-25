import { extendTheme } from "@chakra-ui/react";
import { Link } from "./components/link";
import { Text } from "./components/paragraph";

const overrides = {
  components: {
    Link,
    Text,
  },
};

export default extendTheme(overrides);
