import React from "react";

//  <><><><> Import React Router Dom <><><><>
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  <><><><> Import Page <><><><>
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import OurMenus from "../page/OurMenus";
import Layout from "../layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/our-menu" element={<OurMenus />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
