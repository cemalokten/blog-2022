import React from "react";
import * as C from "../../components";
import { Flex, Box, Link } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Flex flexDirection="column" p={10}>
      <Box id="canvas" flexGrow={1} pb={10}>
        <C.Header />
        <Outlet />
      </Box>
    </Flex>
  );
};

export { Layout };
