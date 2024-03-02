"use client";
import React, { useState } from "react";
// import FetchData from "../../Functions/FetchData";
import FetchData from "@/app/(feed)/Functions/FetchData";
import NoticeCard from "./NoticeCard";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  FetchData({ endPoint: "notice", setData: setNotice });

  return <NoticeCard data={notice} />;
};

export default Notice;
