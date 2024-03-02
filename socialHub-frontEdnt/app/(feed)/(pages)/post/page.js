"use client";
import React, { useState } from "react";
// import FetchData from "../../Functions/FetchData";
import FetchData from "@/app/(feed)/Functions/FetchData";
import ArticleCard from "../article/ArticleCard";
import BookCard from "../book/BookCard";
import NoticeCard from "../notice/NoticeCard";
import ClassCard from "../classes/ClassCard";
import VideoCard from "@/app/video/VideoCard";

const Post = () => {
  const [posts, setPosts] = useState([]);
  FetchData({ endPoint: "all-posts", setData: setPosts });

  const articles = posts.filter((post) => post.category === "article");
  const books = posts.filter((post) => post.category === "book");
  const classes = posts.filter((post) => post.category === "class");
  const notices = posts.filter((post) => post.category === "notice");
  const videos = posts.filter((post) => post.category === "video");
  const events = posts.filter((post) => post.category === "event");
  const shorts = posts.filter((post) => post.category === "short");

  return (
    <div className="ms-[164px] mt-3">
      <ArticleCard data={articles.slice(0, 1)} />
      <BookCard data={books.slice(0, 2)} />
      <ClassCard data={classes.slice(0, 2)} />
      <div className="me-[164px]">
        <NoticeCard data={notices.slice(0, 1)} />
      </div>
      <VideoCard data={videos.slice(0, 2)} />
    </div>
  );
};

export default Post;
