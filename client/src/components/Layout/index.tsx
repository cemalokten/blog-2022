import React from "react";
import { Outlet } from "react-router-dom";
import * as C from "../../components";

const Layout = () => {
  return (
    <>
      <C.Header />
      <C.Box pl={4} pr={4}>
        <Outlet />
      </C.Box>
    </>
  );
};

export { Layout };
