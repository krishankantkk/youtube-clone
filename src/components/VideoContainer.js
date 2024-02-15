import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VedioCard from "./VedioCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setvideo] = useState([]);
  const api = YOUTUBE_API;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(api);
        const res = await data.json();

        setvideo(res.items);
        
      } catch (error) {
        console.error("Error fetching data:sss", error);
      }
    };

    fetchData();
  }, []);

  return <div className="flex gap-5 flex-wrap">{videos &&videos.map((item, index)=>(<Link to={"/watch?v="+item.id} key={item.id} ><VedioCard props={videos[index]} /></Link>)) }</div>;
};

export default VideoContainer;
