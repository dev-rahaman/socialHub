"use client";
import React, { useState } from "react";
import parse from "html-react-parser";
import FetchData from "@/app/(feed)/Functions/FetchData";

const ArticleDetails = ({ params }) => {
  const [articles, setArticles] = useState([]);

  FetchData({ endPoint: "article", setData: setArticles });

  const findArticle = articles.find((item) => item._id === params.id);

  return (
    <>
      <div className="mx-10 my-5 lg:space-y-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl lg:font-bold ">
          {findArticle?.title}
        </h2>
        <img src={"/image3.jpg"} alt="blogs images" />
        <p className="text-2xl">{parse(`${findArticle?.value}`)}</p>
      </div>
    </>
  );
};

export default ArticleDetails;
