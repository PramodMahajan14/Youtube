import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex w-full mt-14 relative">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
