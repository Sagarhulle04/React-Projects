import React from "react";
import { Outlet } from "react-router-dom";
import Navbars from "./Navbars";

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
