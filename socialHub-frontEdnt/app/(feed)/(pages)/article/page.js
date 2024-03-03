"use client";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Tags from "../../FeedComponents/tagsbar/tags";
// import FetchData from "../../Functions/FetchData";
import FetchData from "@/app/(feed)/Functions/FetchData";

const Article = () => {
  const [article, setArticle] = useState([]);
  FetchData({ endPoint: "article", setData: setArticle });

  return (
    <>
      <Tags />
      <div className="mt-12">
        <ArticleCard data={article} />
      </div>
    </>
  );
};

export default Article;
