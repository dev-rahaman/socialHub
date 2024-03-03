"use client";
import React, { useState } from "react";
import FetchData from "@/app/(feed)/Functions/FetchData";
import ArticleCard from "../article/ArticleCard";
import BookCard from "../book/BookCard";
import NoticeCard from "../notice/NoticeCard";
import ClassCard from "../classes/ClassCard";
import VideoCard from "@/app/video/VideoCompnents/VideoCard";

const Post = () => {
  const [posts, setPosts] = useState([]);
  FetchData({ endPoint: "all-posts", setData: setPosts });

  const articles = posts.filter((post) => post.category === "article");
  const books = posts.filter((post) => post.category === "book");
  const classes = posts.filter((post) => post.category === "class");
  const notices = posts.filter((post) => post.category === "notice");
  const videos = posts.filter((post) => post.category === "video");

  return (
    <>
      <ArticleCard data={articles} />
      <BookCard data={books} />
      <ClassCard data={classes} />
      <NoticeCard data={notices} />
      <VideoCard data={videos} />
    </>
  );
};

export default Post;
