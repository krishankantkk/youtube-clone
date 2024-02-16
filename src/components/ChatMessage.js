import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ChatMessage = ({name, text}) => {
  const themeFromStore = useSelector((store) => store.app.isTheme);
  const [theme, setThemeState] = useState(themeFromStore ? "white" : "black");

  useEffect(() => {
    if (themeFromStore) {
      setThemeState("white");
    } else {
      setThemeState("black");
    }
  }, [themeFromStore]);

  return (
    <div className='flex shadow-sm'>
      <img
        className="w-10 h-10 p-2 items-center"
        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
        alt="user image"
      />
      <div className='flex items-center'>
        <span className={`font-bold mr-2 text-${theme === 'white' ? 'black' : 'white'}`}>{name}</span>
        <span className={`text-${theme === 'white' ? 'black' : 'white'}`}>{text}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
