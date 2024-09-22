import React from "react";
import { ReactComponent as User } from "../Images/user.svg";
const Messagechat = ({ name, msgtext }) => {
  return (
    <div className="flex items-center py-2">
      <User />
      <span className="font-bold px-2">{name}</span>
      <span className="ml-1">{msgtext}</span>
    </div>
  );
};

export default Messagechat;
