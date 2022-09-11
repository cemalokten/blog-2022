import React from "react";
import { Outlet } from "react-router-dom";
import * as C from "../../components";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Box pl={10} pr={10}>
        <C.Header />
        <Outlet />
      </Box>
    </>
  );
};

export { Layout };
