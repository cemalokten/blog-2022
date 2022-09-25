import React from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { Layout } from "./components";
import { Home, Blog, Post } from "./pages";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as C from "./components";

function App() {
  const { title: _title } = useParams();
  const title = _title
    ?.replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const { pathname } = useLocation();

  const location = useLocation();
  return (
    <>
      <C.Header heading={"HEY"} />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:title" element={<Post />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
