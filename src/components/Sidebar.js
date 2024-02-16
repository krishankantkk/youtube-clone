import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faGamepad, faFilm, faFootballBall, faLaugh } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector} from "react-redux";
import { setSearchKey } from "../utils/searchSelectedSlice";

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  
  const themeFromStore = useSelector((store) => store.app.isTheme);
  const [theme, setThemeState] = useState(themeFromStore ? "gray" : "black");

  useEffect(() => {
    if (themeFromStore) {
      setThemeState("gray");
    } else {
      setThemeState("black");
    }
  }, [themeFromStore]);
  const dispatch=useDispatch();
const handlessearcbutton=(item)=>{
dispatch(setSearchKey(item));
}

  if(!isMenuOpen) return null;

  return (
    <div className={`p-4 rounded-lg mt-3 w-[15rem] h-[30rem] mx-6 shadow-xl bg-${theme} text-${theme==='gray'?'black':'white'}`}>
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-4 ">You</h1>
        <ul>
        
          <li className="flex items-center mb-2 cursor-pointer hover:bg-gray-600 hover:rounded-sm" onClick={()=>handlessearcbutton("online games")}>
            <FontAwesomeIcon icon={faGamepad} className="mr-2" />
            Game
          </li>
          <li className="flex items-center mb-2 cursor-pointer hover:bg-gray-600 hover:rounded-sm"onClick={()=>handlessearcbutton("Movies bollywood")}>
            <FontAwesomeIcon icon={faFilm} className="mr-2" />
            Movies
          </li>
          <li className="flex items-center mb-2 cursor-pointer hover:bg-gray-600 hover:rounded-sm"onClick={()=>handlessearcbutton("Sports matches")}>
            <FontAwesomeIcon icon={faFootballBall} className="mr-2" />
            Sports
          </li>
          <li className="flex items-center mb-2 cursor-pointer hover:bg-gray-600 hover:rounded-sm"onClick={()=>handlessearcbutton("comedy videos")}>
            <FontAwesomeIcon icon={faLaugh} className="mr-2" />
            Comedy
          </li>
          <li className="flex items-center mb-2 cursor-pointer hover:bg-gray-600 hover:rounded-sm"onClick={()=>handlessearcbutton("News videos")}>
            <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
            News
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-bold mb-4">My Account</h1>
        <ul>
          <li className="mb-2">Your Channel</li>
          <li className="mb-2">Your History</li>
          <li>Your Videos</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
