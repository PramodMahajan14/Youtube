import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-full sm:w-[400px] sm:w-[400px] h-fit my-3 px-1 ">
      <img src={thumbnails.medium.url} className="w-full h-56 rounded-md" />
      <ul className="flex cursor-pointer py-1 justify-start w-full ">
        <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span class="font-medium text-gray-600 dark:text-gray-300">
            {channelTitle.charAt(1).toUpperCase()}
          </span>
        </div>
        <div class="ml-5 dark:text-white h-fit flex-wrap h-4/5">
          <p className="text-sm font-bold ">{title}</p>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            {channelTitle}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
