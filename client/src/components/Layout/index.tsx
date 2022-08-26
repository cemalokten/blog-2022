import React from "react";
import { Outlet } from "react-router-dom";
import * as C from "../../components";

const Layout = () => {
  return (
    <>
      <C.Header />
      <Outlet />
    </>
  );
};

export { Layout };
