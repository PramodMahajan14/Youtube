import React, { useEffect } from "react";
import Messagechat from "./Messagechat";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../Utils/chatslice";
import { generateRandomText, getRandomName } from "../Helper/randomtexthelper";

const LiveChart = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.liveChat.messages);

  // this api pooling
  useEffect(() => {
    const inTime = setInterval(() => {
      dispatch(
        addMessages({
          name: getRandomName(),
          msg: generateRandomText(),
        })
      );
    }, 2000);

    return () => clearInterval(inTime);
  }, []);
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-[400] h-[400] overflow-y-scroll flex flex-col-reverse ">
      {messages.map((m, i) => (
        <Messagechat key={i} name={m.name} msgtext={m.msg} />
      ))}
    </div>
  );
};

export default LiveChart;
