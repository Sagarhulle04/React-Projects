import React from "react";
import NavigationBar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <NavigationBar />
      <main style={{ maxWidth: "90%", margin: "2rem auto" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
