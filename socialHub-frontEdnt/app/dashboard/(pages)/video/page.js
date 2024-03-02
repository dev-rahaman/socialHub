"use client";

import { useContext } from "react";
import { Button, TextInput } from "../../DashboardComponents/SmallComponents";
import { AuthContext } from "@/app/Provider/AuthProvider";
import PostData from "../../Functions/PostData";

const Video = () => {
  const { user } = useContext(AuthContext);

  const handleVideo = (e) => {
    e.preventDefault();
    const form = e.target;
    const video = form.video.value;
    const title = form.title.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const tags = form.tags.value;

    const userEmail = user?.email;

    const newVideo = {
      userEmail,
      video,
      title,
      description,
      thumbnail,
      tags,
    };
    PostData({ endPoint: "video", newData: newVideo });
  };

  return (
    <form onSubmit={handleVideo} className="flex flex-col gap-y-5">
      {/* video */}
      <TextInput
        type={"file"}
        htmlFor={"video"}
        id={"video"}
        labelTitle={"select Video"}
        name={"video"}
        paragraph={"একটি ভিডিও সিলেক্ট করুন"}
      />

      {/* title  */}
      <TextInput
        type={"text"}
        htmlFor={"title"}
        id={"title"}
        labelTitle={"title"}
        name={"title"}
        paragraph={"ভিডিও টাইটেল"}
      />

      {/* description */}
      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor={"description"}>description</label>
        <span className="block">{"ভিডিও ডেসক্রিপশন"}</span>
        <textarea
          type={"text"}
          id={"description"}
          name={"description"}
          required
          className="w-full h-[300px] p-4"
        />
      </div>

      {/* video */}
      <TextInput
        type={"file"}
        htmlFor={"thumbnail"}
        id={"thumbnail"}
        labelTitle={"thumbnail"}
        name={"thumbnail"}
        paragraph={"একটি ভিডিও থাম্বনেইল সিলেক্ট করুন"}
      />
      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"Tag"}
        name={"tags"}
        paragraph={"Minimum 5 tags is required"}
      />
      {/* playlist */}
      <select>
        <option>Select a playlist</option>
        <option>name1</option>
        <option>name2</option>
        <option>name3</option>
        <option>name4</option>
        <option>name5</option>
      </select>
      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default Video;
