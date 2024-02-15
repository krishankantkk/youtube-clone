import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_QUERY_SEARCH_API } from "../utils/constant";
import { toggleMenu } from "../utils/appslice";
import { cachesResult } from "../utils/searchSlice";
import { setSearchKey } from "../utils/searchSelectedSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [autoSuggestionList, setAutoSuggestionList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setAutoSuggestionList(searchCache[searchQuery]);
      } else {
        getAutoSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  async function getAutoSuggestion() {
    const data = await fetch(YOUTUBE_QUERY_SEARCH_API + searchQuery);
    const res = await data.json();
    setAutoSuggestionList(res[1]);

    dispatch(
      cachesResult({
        [searchQuery]: res[1],
      })
    );
  }

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handlesSearchKey = (item) => {
    console.log(item);
    dispatch(setSearchKey(item));
    setSearchQuery(item);
    setShowSuggestion(false); // Hide suggestions after selecting an item
  };

  return (
    <div className="flex justify-between mt-2 mx-4 mb-2 p- shadow-lg ">
      <div className="flex">
        <img
          className="w-8 h-8 cursor-pointer"
          onClick={handleToggleMenu}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="hamburger icon"
        />
       <Link to='/'>
        <img
          className="w-8 h-9 mx-2 "
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png"
          alt="youtube icon"
        />
        </Link>
        
      </div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-l-full pl-5 w-[30rem] h-[2rem]"
        />
        <button
          className="border rounded-r-full bg-gray-100 w-16 h-[2rem] text-center"
          onClick={() => handlesSearchKey(searchQuery)}
        >
          🔍
        </button>
        {showSuggestion && (
          <div className="absolute bg-white w-[30rem] rounded-sm border gap-3">
            <ul className="p-2">
              {autoSuggestionList.map((item) => (
                <div key={item} >
                  <li className="gap-2 hover:bg-red-400 cursor-pointer" onClick={() => handlesSearchKey(item)}>
                    🔍{item}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <Link to='/'><img
          className="w-8 h-8 mr-4"
          src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
          alt="user image"
        /></Link>
        
      </div>
    </div>
  );
};

export default Header;
