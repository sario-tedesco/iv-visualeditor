import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import VisualEditor from "../pages/VisualEditor";
import NoPage from "../pages/NoPage";


function Routing() {
    return (
      <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="VisualEditor" element={<VisualEditor />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
      </>
    );
  }

  export default Routing;
