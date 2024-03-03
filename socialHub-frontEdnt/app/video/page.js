"use client";
import { useState } from "react";
import VideoCard from "./VideoCompnents/VideoCard";
import FetchData from "../(feed)/Functions/FetchData";

const Video = () => {
  const [videos, setVideos] = useState([]);
  FetchData({ endPoint: "video", setData: setVideos });

  return <VideoCard data={videos} />;
};

export default Video;
