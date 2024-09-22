import React from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";

const Home = () => {
  return (
    <div
      className="w-100 h-[100vh] p-4 grid-flow-row md:flex md:justify-between"
      style={{ background: "#0000ff40" }}
    >
      <div className="row-span-6">
        <button>PayTrackz</button>
        <p>
          Help in your business and partnership with the partners in your
          business.
        </p>
      </div>
      <div className="row-span-6 flex justify-center p-3 ">
        <div className="w-5/6 h-full  border-lime-500 text-center rounded-lg bg-orange-400">
          <p className="py-4">Logo</p>
          <h4 className="py-5 w-full">Let's get Start</h4>
          <from>
            <input type="text" className="w-full my-2" />
            <input type="text" className="w-full my-2" />
          </from>
        </div>
      </div>
    </div>
  );
};

export default Home;
