import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Comment = ({comment}) => {
  const themeFromStore = useSelector((store) => store.app.isTheme);
  const [theme, setThemeState] = useState(themeFromStore ? "white" : "black");

  useEffect(() => {
    if (themeFromStore) {
      setThemeState("white");
    } else {
      setThemeState("black");
    }
  }, [themeFromStore]);
  const {name, text}=comment
  return (
    <div className='my-3 rounded'>
         <div className="flex">
      <img
        className="h-8 w-8 "
        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
        alt=""
      />
      <div className="flex flex-col">
      <h2 className={`font-bold mr-2 text-${theme === 'white' ? 'black' : 'white'}`}>{name}</h2>
      <p className={`mr-2 text-${theme === 'white' ? 'black' : 'white'}`}>{text}</p>
      </div>
      
    </div>
      
    </div>
  )
}

export default Comment
