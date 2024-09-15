import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const sidebarOpen = useSelector((store) => store.app.sideMenuCollaped);
  return (
    <div className={`${sidebarOpen ? "sm:w-5/6 w-full" : "w-full"}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
