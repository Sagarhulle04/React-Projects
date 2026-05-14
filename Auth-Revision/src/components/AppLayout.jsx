import React from "react";
import Navbars from "./Navbars";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbars />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
