import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VedioCard from "./VedioCard";
const VideoContainer = () => {
  const [videos, setvideo] = useState([]);
  const api = YOUTUBE_API;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(api);
        const res = await data.json();

        setvideo(res.items);
        console.log(res.items);
      } catch (error) {
        console.error("Error fetching data:sss", error);
      }
    };

    fetchData();
  }, []);

  return <div className="flex gap-1 flex-wrap">{videos[0] &&videos.map((item, index)=>(<VedioCard props={videos[index]} />)) }</div>;
};

export default VideoContainer;
