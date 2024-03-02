"use client";
// import FetchData from "../../Functions/FetchData";
import FetchData from "@/app/(feed)/Functions/FetchData";
import { useState } from "react";
import ClassCard from "./ClassCard";
import Tags from "../../FeedComponents/tagsbar/tags";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  FetchData({ endPoint: "class", setData: setClasses });

  return (
    <>
      <Tags />
      <div className="mt-5">
        <ClassCard data={classes} />
      </div>
    </>
  );
};

export default Classes;
