import React from "react";
import { Outlet } from "react-router-dom";
import Navbars from "./Navbars";

const AppLayout = () => {
  return (
    <div>
      <Navbars />
      <main style={{ maxWidth: "90%", margin: "0 auto" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
