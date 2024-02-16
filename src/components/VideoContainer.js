import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import { YOUTUBE_SEARCH_QUERY_VIDEO_API } from "../utils/constant";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const searchKey = useSelector((store) => store.searchSelected);
  const api = YOUTUBE_API;
  const API_KEY=process.env.REACT_APP_YOUTUBE_API;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(api);
        const res = await data.json();
        setVideos(res.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
      if(searchKey.searchKey!=""){
        const data = await fetch(`${YOUTUBE_SEARCH_QUERY_VIDEO_API}?q=${searchKey.searchKey}&key=${API_KEY}`);
        const res = await data.json();
        setVideos(res.items);
      }
      } catch (error) {
        console.error("Error fetching search data:", error);
      }
    };

   fetchData();
  }, [searchKey]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 md:flex-row md:flex-wrap sm:gap-3 flex-wrap sm:w-full">
      {videos &&
        videos.map((item, index) => (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <VedioCard props={videos[index]} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
