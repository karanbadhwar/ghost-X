import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
