import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [Video, setVideo] = useState([]);
  const fetchVideo = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const youtubedata = await response.json();
      setVideo(youtubedata?.items);
    } catch (err) {}
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  return (
    <div className="flex flex-wrap w-full justify-center ">
      {Video.map((item, index) => (
        <Link to={"/watch?v=" + item.id} key={index}>
          <VideoCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
