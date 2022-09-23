import React from "react";
import { Outlet, useParams } from "react-router-dom";
import * as C from "../../components";
import { Flex, Box } from "@chakra-ui/react";

const Layout = () => {
  const { title: _title } = useParams();
  const title = _title
    ?.replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <Box overflowX="hidden" position="relative">
      <Flex direction="column" minH="100vh" pl={10} pr={10}>
        <C.Header heading={title?.replaceAll("-", " ") || "Cemal Okten"} />
        <Outlet />
      </Flex>
    </Box>
  );
};

export { Layout };
