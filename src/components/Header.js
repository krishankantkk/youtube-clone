import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_QUERY_SEARCH_API } from "../utils/constant";
import { toggleMenu } from "../utils/appslice";
import { cachesResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [autoSugestionList, setautoSugestionList] = useState([]);
  const [showSugestion, setshowSugestion] = useState(false);
  
  const dispatch = useDispatch();
  //subscribing the searchCache 
  const searchCache=useSelector((store)=>store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setautoSugestionList(searchCache[searchQuery]);
      }else
      getAutoSuggestion();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  async function getAutoSuggestion() {
    const data = await fetch(YOUTUBE_QUERY_SEARCH_API + searchQuery);
    const res = await data.json();
    setautoSugestionList(res[1]);
    console.log(res[1]);
    dispatch(cachesResult(
      {
        [searchQuery]:res[1]
      }
    ));
  }
  const handletogglemenu = () => {
    console.log(searchQuery);
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between mt-2 mx-4 shadow-lg ">
      <div className="flex ">
        <img
          className="w-8 h-8 cursor-pointer"
          onClick={() => handletogglemenu()}

          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="hambericon"
        />
        <img
          className="w-8 h-9 mx-2 "
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png"
          alt="youtube icon"
        />
      </div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onFocus={(e)=>setshowSugestion(true)}
          onBlur={()=>setshowSugestion(false)}
          onChange={(e) => setsearchQuery(e.target.value)}
          className="border rounded-l-full w-[30rem] h-[2rem]"
        />
        <button className="border rounded-r-full bg-gray-100 w-16 h-[2rem] text-center">
          🔍
        </button>
        {showSugestion&&<div className="absolute bg-white w-[30rem] rounded-sm border gap-3">
          <ul className="p-2">
            {autoSugestionList &&
              autoSugestionList.map((item) => (
                <li
                  className="gap-2 hover:bg-red-400 cursor-pointer"
                  key={item}
                >
                  🔍{item}
                </li>
              ))}
          </ul>
        </div>}
        
      </div>
      <div>
        <img
          className="w-8 h-8 mr-4"
          src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
          alt="user-image"
        />
      </div>
    </div>
  );
};

export default Header;
