import React from "react";
import * as C from "../../components";
import { Outlet } from "react-router-dom";
import { Flex, Box, Link } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Flex flexDirection="column" p={6}>
      <Box id="canvas" flexGrow={1} pb={10}>
        <C.Header />
        <Outlet />
      </Box>
    </Flex>
  );
};

export { Layout };
