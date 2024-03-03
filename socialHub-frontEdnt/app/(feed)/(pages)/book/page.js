"use client";
import React, { useState } from "react";
import BookCard from "./BookCard";
import Tags from "../../FeedComponents/tagsbar/tags";
// import FetchData from "../../Functions/FetchData";
import FetchData from "@/app/(feed)/Functions/FetchData";

const Book = () => {
  const [books, setBooks] = useState([]);

  FetchData({ endPoint: "book", setData: setBooks });

  return (
    <>
      <Tags />
      <div className="mt-20">
        <BookCard data={books} />
      </div>
    </>
  );
};

export default Book;
