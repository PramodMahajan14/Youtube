import React from "react";

const Buttons = ({ title }) => {
  return (
    <button className="py-1 px-2 bg-slate-100 rounded my-1 mx-2 whitespace-nowrap">
      {title}
    </button>
  );
};

export default Buttons;
