import React from "react";
import Buttons from "./Buttons";
import { ReactComponent as LeftIcon } from "../Images/left.svg";
import { ReactComponent as RightIcon } from "../Images/right.svg";
const ButtonList = () => {
  return (
    <div className="flex w-full items-center ">
      <div className="flex w-full  overflow-x-scroll  hideScrollBar">
        <Buttons title={"All"} />
        <Buttons title={"Sport"} />
        <Buttons title={"News"} />
        <Buttons title={"HollyWood"} />
        <Buttons title={"Movies"} />
        <Buttons title={"Gaming"} />
        <Buttons title={"Live"} />
        <Buttons title={"Lughter"} />
        <Buttons title={"Gadgets"} />
        <Buttons title={"Tools"} />
        <Buttons title={"Comedy"} />
        <Buttons title={"Characters"} />
        <Buttons title={"Background Music"} />
        <Buttons title={"Driving"} />
        <Buttons title={"Politics"} />
        <Buttons title={"Kapil sharma Show"} />
      </div>
    </div>
  );
};

export default ButtonList;
