import React, { useEffect, useState } from "react";
import { ReactComponent as HomeIcon } from "../Images/Home.svg";
import { ReactComponent as Logo } from "../Images/youtube-svgrepo-com.svg";
import { ReactComponent as Burger } from "../Images/burger.svg";
import { ReactComponent as Headermenu } from "../Images/headermenu.svg";
import { ReactComponent as UserAvatar } from "../Images/user.svg";
import { ReactComponent as AddIcon } from "../Images/Add.svg";
import "./common.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../Utils/constant";
import { ReactComponent as SearchIcon } from "../Images/serach.svg";
import { AddToCache } from "../Utils/searchSlice";
const Header = () => {
  // ---------------debouncing ----------------------
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const searchCaches = useSelector((store) => store.sarchCache);
  const dispath = useDispatch();
  // ***************Cache******************
  /* 
  searchCach cache ={
     "iphon":["iphone","iphone 12","iphone 14"]
  }
  */
  useEffect(() => {
    // API CALL
    // make an api call after user key press
    // but if the different between 2 API call is < 200ms
    // decline the API call
    const timer = setTimeout(() => {
      if (searchCaches[searchQuery]) {
        setSuggestion(searchCaches[searchQuery]);
      } else {
        GetSuggestionSearch();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * iphone
   * key - i
   * - render the component
   * - useEffect()'
   * - start timer => make api call after 200 ms
   *
   * Key - ip
   * - destroy the component(useEffect return method)
   * - re-render the component
   * - useEffect()
   * - start  timer => make api call after 200 ms
   *
   *
   * setTimeoutTime(200) - make an API call after 200ms
   */

  // ---------------------------------------
  const GetSuggestionSearch = async () => {
    try {
      console.log("Search Query call - " + searchQuery);
      const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
      const sugg = await response.json();
      setSuggestion(sugg[1]);
      dispath(
        AddToCache({
          [searchQuery]: sugg[1],
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const toggleMenuHandle = () => {
    dispath(toggleMenu());
  };
  return (
    <>
      <nav class="w-full border-b-[1px] fixed bg-white z-10 top-0">
        <div class="relative grid grid-flow-col h-14 items-center">
          <div class="col-span-1 flex align-middle">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-full p-1 ml-1  hover:bg-slate-100  hidden sm:block cursor-pointer"
              onClick={() => toggleMenuHandle()}
            >
              <Burger />
            </button>
            <div class="px-2 py-1 flex items-center">
              <Logo className="size-6 " />{" "}
              <h4 className="ml-1 font-bold">Youtube</h4>
            </div>
          </div>

          {/* Searchbar - display in md and lg devices */}
          <div class="col-span-10  px-1 hidden sm:block ">
            <span className="flex w-full justify-center relative">
              <input
                type="text"
                className="w-6/12 border outline-none border-gray-400 p-2 rounded-l-full"
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}
              />
              <button className="border border-gray-400 p-2 rounded-r-full bg-slate-100">
                Submit
              </button>

              {suggestions.length > 0 ? (
                <div className="absolute top-10  w-[55%]  bg-white w-full rounded-br-xl rounded-bl-xl shadow-orange-50 p-1 max-h-52 h-fit overflow-y-scroll">
                  <ul className=" block justify-center">
                    {suggestions.map((sug) => (
                      <li
                        key={sug}
                        className="flex items-center my-1 hover:bg-blue-100 rounded-sm px-1 cursor-pointer"
                      >
                        <SearchIcon className="size-4" />
                        <p className="ml-2">{sug}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </span>
          </div>

          {/* userIcon and menuButton(ThreeDotIcon ) display in md and lg devices */}
          <div class="col-span-1 mr-2 justify-end hidden sm:flex">
            <button
              type="button"
              class="relative mr-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 p-1 hover:bg-slate-100 rounded-full"
            >
              <Headermenu />
            </button>
            <btton
              type="button"
              class="flex   px-2 py-1 border-2 rounded-3xl text-blue-500 text-blue-400"
            >
              <UserAvatar />
              Sign In
            </btton>
          </div>

          {/* Searchbar display in small devices */}
          <div className="col-span-5  relative sm:hidden ">
            <span className="flex">
              <input
                type="text"
                className="border-none outline-none"
                value={searchQuery}
                onChange={(e) => setsearchQuery(e.target.value)}
              />
              <SearchIcon />
            </span>
            <div className="absolute bg-white w-5/6 border-x border-b rounded-br-md rounded-bl-md shadow-slate-500 max-h-32 overflow-y-scroll p-1 h-fit">
              <ul>
                {suggestions.map((sug) => (
                  <li
                    key={sug}
                    className="flex items-center my-1 hover:bg-blue-100 rounded-sm px-1 cursor-pointer"
                  >
                    <SearchIcon className="size-4" />
                    <p className="ml-2">{sug}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* userIcon display in small devices */}
          <div class="col-span-1 justify-end  items-center pr-2 py-1  mr-3   sm:hidden ">
            <span className="flex items-center justify-end ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* </div> */}

        <div class="sm:hidden" id="mobile-menu">
          <div class="fixed flex bottom-0 w-full justify-around px-2  border-t-[1px] z-1 bg-white">
            <a href="#" class="px-2 py-1 ">
              <HomeIcon />
              <p className="text-center text-xs align- ">Home</p>
            </a>
            <a href="#" class="px-2 py-1 block">
              <HomeIcon />
              <p className="text-center text-xs align- ">Home</p>
            </a>
            <a href="#" class=" px-1 py-1">
              <AddIcon />
            </a>
            <a href="#" class="px-2 py-1">
              <HomeIcon />
              <p className="text-center text-xs align- ">Home</p>
            </a>
            <a href="#" class=" px-2 py-1">
              <UserAvatar />
              <p className="text-center text-xs align- ">You</p>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
