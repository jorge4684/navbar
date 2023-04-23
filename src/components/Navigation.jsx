import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      nav
      <Outlet />
    </div>
  );
};

export default Navigation;
