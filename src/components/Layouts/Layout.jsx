import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Instagram from "./Instagram/Instagram";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Instagram />
      <Footer />
    </>
  );
}

export default Layout;
