import React, { Fragment } from "react";

//  <><><><> Import React Router Dom <><><><>
import { Outlet } from "react-router-dom";

//  <><><><> Import Component Layout <><><><>
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ShoppingCard from "../components/shoppingCard";

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
      <ShoppingCard />
    </Fragment>
  );
};
export default Layout;
