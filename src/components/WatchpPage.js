import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChats from "./LiveChat";
const WatchpPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" w-full">
      <div className="flex w-full flex-col sm:flex-row ">
        <div className="flex w-full">
          <iframe
            className="p-3 w-72 h-52 sm:w-[1000px] sm:h-[500px]"
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="true" 
          ></iframe>
        </div>
        <div className="sm:w-full w-[20rem] p-3">
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
