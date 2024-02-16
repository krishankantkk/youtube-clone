import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useSelector } from 'react-redux';

const LiveChats = () => {
  const themeFromStore = useSelector((store) => store.app.isTheme);
  const [theme, setThemeState] = useState(themeFromStore ? "bg-white" : "bg-black");

  useEffect(() => {
    if (themeFromStore) {
      setThemeState("bg-white");
    } else {
      setThemeState("bg-black");
    }
  }, [themeFromStore]);

  return (
    <div className={`w-full h-[470px] border border-${theme} overflow-hidden overflow-y-scroll rounded-lg ${theme}`}>
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
     
    </div>
  );
};

export default LiveChats;
