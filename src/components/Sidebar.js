import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faGamepad, faFilm, faFootballBall, faLaugh } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";


const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;

  return (
    <div className="bg-gray-200 p-4 rounded-lg w-52 mt-3 h-[30rem] mx-6 shadow-xl">
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-4">Subscription</h1>
        <ul>
          <li className="flex items-center mb-2">
            <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
            Subscription
          </li>
          <li className="flex items-center mb-2">
            <FontAwesomeIcon icon={faGamepad} className="mr-2" />
            Game
          </li>
          <li className="flex items-center mb-2">
            <FontAwesomeIcon icon={faFilm} className="mr-2" />
            Movies
          </li>
          <li className="flex items-center mb-2">
            <FontAwesomeIcon icon={faFootballBall} className="mr-2" />
            Sports
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faLaugh} className="mr-2" />
            Comedy
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-bold mb-4">You</h1>
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
