import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Blog, Post } from "./pages";

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
