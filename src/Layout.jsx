import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/signup", "/login"];

  return (
    <>
      {!hideFooterRoutes.includes(location.pathname) && <Header />}
      <Outlet />
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default Layout;
