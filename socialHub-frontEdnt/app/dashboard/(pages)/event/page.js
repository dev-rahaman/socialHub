"use client";
import React, { useContext, useRef, useState } from "react";
import { Button, TextInput } from "../../DashboardComponents/SmallComponents";
import { AuthContext } from "@/app/Provider/AuthProvider";
import PostData from "../../Functions/PostData";

const Class = () => {
  const { user } = useContext(AuthContext);

  const handleEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const video = form.video.value;
    const title = form.title.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const tags = form.tags.value;

    const userEmail = user?.email;

    const newEvent = { userEmail, video, title, description, thumbnail, tags };
    PostData({ endPoint: "event", newData: newEvent });
  };

  return (
    <form onSubmit={handleEvent} className="flex flex-col gap-y-5">
      {/* video */}
      <TextInput
        type={"file"}
        htmlFor={"video"}
        id={"video"}
        labelTitle={"select Video"}
        name={"video"}
        paragraph={"একটি ইভেন্ট ভিডিও সিলেক্ট করুন"}
      />

      {/* title  */}
      <TextInput
        type={"text"}
        htmlFor={"title"}
        id={"title"}
        labelTitle={"title"}
        name={"title"}
        paragraph={"একটি ইভেন্ট টাইটেল লিখুন"}
      />

      {/* description */}
      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor={"description"}>ডেসক্রিপশন</label>
        <span className="block">{"ইভেন্ট ডেসক্রিপশন লিখুন"}</span>
        <textarea
          type={"text"}
          id={"description"}
          name={"description"}
          required
          className="w-full h-[300px]"
        />
      </div>

      {/* video */}
      <TextInput
        type={"file"}
        htmlFor={"thumbnail"}
        id={"thumbnail"}
        labelTitle={"thumbnail"}
        name={"thumbnail"}
        paragraph={"একটি ইভেন্ট থাম্বনেইল সিলেক্ট করুন"}
      />
      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"Tag"}
        name={"tags"}
        paragraph={"Minimum 5 tags is required"}
      />
      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default Class;
