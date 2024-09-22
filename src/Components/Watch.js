import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closedMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChart from "./LiveChart";

const Watch = () => {
  const [SearchParams] = useSearchParams();
  console.log(SearchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closedMenu());
  }, []);
  return (
    <div className="p-1 m-1 block">
      <div className="flex w-full">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + SearchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <LiveChart />
      </div>
      <CommentContainer />
    </div>
  );
};

export default Watch;
