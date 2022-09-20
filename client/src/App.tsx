import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Home, Blog, Post } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
