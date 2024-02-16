import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const Body = () => {
  const themeFromStore = useSelector((store) => store.app.isTheme);
  const [theme, setThemeState] = useState(
    themeFromStore ? "bg-white" : "bg-black"
  );

  useEffect(() => {
    if (themeFromStore) {
      setThemeState("bg-white");
    } else {
      setThemeState("bg-black");
    }
  }, [themeFromStore]);

  return (
    <div className={`flex ${theme}`}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
