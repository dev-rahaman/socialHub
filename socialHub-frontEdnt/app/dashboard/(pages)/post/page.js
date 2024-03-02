"use client";

import React, { useState } from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineGif } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

export const DashboardPost = () => {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState("");

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostImageChange = (e) => {
    setPostImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Content:", postContent);
    console.log("Post Image:", postImage);
  };

  return (
    <div className="w-[500px] mt-20 rounded-md shadow-lg border border-gray-500">
      <div className="bg-white p-6 ">
        <h2 className="text-2xl font-bold mb-4 text-center ">Create Post</h2>
        <div className="flex items-center mb-4">
          <div>
            <img
              src="https://placehold.it/40x40"
              alt="User Avatar"
              className="rounded-full mr-2"
            />
          </div>
          <div>
            <p className="bold">Abdur Rahaman</p>
            <p className="bold">Public</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              id="postContent"
              name="postContent"
              rows="4"
              value={postContent}
              onChange={handlePostContentChange}
              className="w-full h-[200px] p-2 outline-none rounded-md resize-none custom-scrollbar-text-post"
              autoFocus
            />
          </div>
          <div className="flex justify-between items-center border-t border-gray-500 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl cursor-pointer btn text-white p-1 rounded-full me-2">
                <MdEmojiEmotions />
              </span>
              <span className="text-2xl cursor-pointer btn text-white p-1 rounded-full me-2">
                <FaLocationDot />
              </span>
              <span className="text-2xl cursor-pointer btn text-white p-1 rounded-full me-2">
                <MdOutlineGif />
              </span>
              <span className="text-2xl cursor-pointer btn text-white p-1 rounded-full me-2">
                <FaHeartbeat />
              </span>
              <span className="text-2xl cursor-pointer btn text-white p-1 rounded-full me-2">
                <MdLiveTv />
              </span>
              <label
                htmlFor="choiceFile"
                className="cursor-pointer border text-white border-dashed btn w-[30px] h-[30px] rounded flex  items-center justify-center"
              >
                <FaImage />
              </label>
              <input
                type="file"
                id="choiceFile"
                className="hidden text-white mt-5 border cursor-pointer border-dashed  bg-[#00193b] rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 btn rounded-full font-bold"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
