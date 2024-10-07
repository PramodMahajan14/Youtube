import React from "react";
import { ReactComponent as HomeIcon } from "../Images/Home.svg";
import { ReactComponent as History } from "../Images/history.svg";
import { ReactComponent as UserAvatar } from "../Images/user.svg";
import { ReactComponent as FireIcon } from "../Images/fire.svg";
import { ReactComponent as MusicIcon } from "../Images/music.svg";
import { ReactComponent as MovieIcon } from "../Images/movie.svg";
import { ReactComponent as LiveIcon } from "../Images/live.svg";
import { ReactComponent as GameIcon } from "../Images/game.svg";
import { ReactComponent as NewsIcon } from "../Images/news.svg";
import { ReactComponent as BulbIcon } from "../Images/bulboff.svg";
import { ReactComponent as MicIcon } from "../Images/mic.svg";
import { ReactComponent as AddIcon } from "../Images/Add.svg";
import { ReactComponent as CupIcon } from "../Images/cup.svg";
import { ReactComponent as ShortIcon } from "../Images/short.svg";
import { ReactComponent as SubscriptionIcon } from "../Images/subscription.svg";
import { ReactComponent as LibraryIcon } from "../Images/library.svg";
import { useSelector } from "react-redux";
const SideBar = ({ Collaped }) => {
  const IsCollapse = useSelector((store) => store.app.sideMenuCollaped);
  if (!IsCollapse) return null;
  return (
    <div
      className="w-1/6  hidden sm:block overflow-y-scroll hideScrollBar z-0 "
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <ul className="w-full border-b-2 block">
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded hover:font-bold font">
          <HomeIcon />
          <p className=" ml-5  text-l ">Home</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <ShortIcon />
          <p className=" ml-5 text-l ">Short</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <SubscriptionIcon />
          <p className=" ml-5 text-l ">Subcription</p>
        </li>
      </ul>
      <ul className="w-full border-b-2 block">
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <LibraryIcon />
          <p className=" ml-5  text-l ">Library</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <History />
          <p className=" ml-5 text-l ">History</p>
        </li>
      </ul>
      <ul className="w-full border-b-2 block">
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center">
          <p className="text-black text-sm">
            Sign in to like videos, comment, and subscribe
          </p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center">
          <btton
            type="button"
            class="flex   px-2 py-1 border-2 rounded-3xl text-blue-500 text-blue-400"
          >
            <UserAvatar />
            Sign In
          </btton>
        </li>
      </ul>
      <ul className="w-full border-b-2 block">
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-cente">
          <p className="text-l font-semibold">Explore</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <FireIcon />
          <p className=" ml-5 text-sm ">Trending</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <MusicIcon />
          <p className=" ml-5 text-sm ">Music</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <MovieIcon />
          <p className=" ml-5 text-sm ">Movie & TV</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <LiveIcon />
          <p className=" ml-5 text-sm ">Live</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <GameIcon />
          <p className=" ml-5 text-sm ">Game</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <NewsIcon />
          <p className=" ml-5 text-sm ">News</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <CupIcon />
          <p className=" ml-5 text-sm ">Sports</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <BulbIcon />
          <p className=" ml-5 text-sm ">Learning</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <BulbIcon />
          <p className=" ml-5 text-sm ">Fashion & beauty</p>
        </li>
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <MicIcon />
          <p className=" ml-5 text-sm ">Podcast</p>
        </li>
      </ul>
      <ul className="w-full  block">
        <li className="flex cursor-pointer justify-start p-1  my-1 mx-1 items-center hover:bg-slate-200 rounded">
          <AddIcon />
          <p className=" ml-5 text-sm ">Browser Channels</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
