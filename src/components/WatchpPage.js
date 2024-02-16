import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChats from "./LiveChat";
const WatchpPage = () => {
  const [searchParams] = useSearchParams();
console.log("this is page");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" w-full">
      <div className="flex w-full ">
        <div className="flex w-full">
        
          <iframe
            className="p-3"
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>{}</div>
        </div>
        <div className="w-full p-3">
          <LiveChats />
        </div>
      </div>
      <div className="w-8/12">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchpPage;
