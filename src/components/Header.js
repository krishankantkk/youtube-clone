import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_QUERY_SEARCH_API } from "../utils/constant";
import { toggleMenu } from "../utils/appslice";
import { cachesResult } from "../utils/searchSlice";
import { setSearchKey } from "../utils/searchSelectedSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import {setTheme} from "../utils/appslice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [autoSuggestionList, setAutoSuggestionList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [ColorTheme, setColorTheme]=useState("white");
  
  const theme=useSelector((store)=>store.app.isTheme)
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
 const ToggleTheme=()=>{
  dispatch(setTheme());
  if(theme){
    setColorTheme("black");
  }
  else setColorTheme("white");
  console.log("them change")
 }
  return (
    <div className={"flex justify-between items-center pt-4 border-b-gray-50 shadow-lg bg-"+ColorTheme}>
      <div className="flex">
        {theme?<img
          className={"w-8 h-8 cursor-pointer hover:bg-black-200 hover:text-"+ColorTheme}
          onClick={handleToggleMenu}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="hamburger icon"
        />:<img src="https://w7.pngwing.com/pngs/419/59/png-transparent-hamburger-button-computer-icons-marmon-keystone-canada-menu-red-sea-thumbnail.png"  className={"w-8 h-8  rounded-sm ml-3 cursor-pointer hover:bg-black-200 hover:text-"+ColorTheme}
        onClick={handleToggleMenu} alt="humber icon" />}
       <Link to='/'>
      <img alt="user image" src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" className="w-8 h-8"/>
        </Link>
        
      </div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`border rounded-l-full pl-5 w-[30rem] h-[2rem] bg-${ColorTheme} text-${ColorTheme==='white'?'black':'white'}`}
        />
        <button
          className={`border rounded-r-full w-16 h-[2rem] text-center hover:bg-gray-600 bg-${ColorTheme}` }
          onClick={() => handlesSearchKey(searchQuery)}
        >
          🔍
        </button>
        {showSuggestion && (
          <div className={`absolute bg-${ColorTheme} w-[30rem] rounded-sm border gap-3`}>
            <ul className="p-2">
              {autoSuggestionList.map((item) => (
                <div key={item} >
                  <li className={`gap-2 hover:bg-blue-200 text-${ColorTheme==='white'?'black':'white'} cursor-pointer bg-${ColorTheme}`} onMouseDown={() => handlesSearchKey(item)}>
                    🔍{item}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-center">

        <button className= "mr-2 h-10 w-10 items-center pb-2" onClick={()=>ToggleTheme()}>{theme?<FontAwesomeIcon  icon={faSun} />:<FontAwesomeIcon className="text-white" icon={faSun} />}</button>
      
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
