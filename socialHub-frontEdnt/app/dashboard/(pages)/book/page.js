"use client";
import React, { useContext } from "react";
import { Button, TextInput } from "../../DashboardComponents/SmallComponents";
import { AuthContext } from "@/app/Provider/AuthProvider";
import PostData from "../../Functions/PostData";

const Book = () => {
  const { user } = useContext(AuthContext);

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookFile = form.bookFile.value;
    const bookCover = form.bookCover.value;
    const bookName = form.bookName.value;
    const bookAuthor = form.bookAuthor.value;
    const bookCategory = form.Category.value;
    const bookPrice = form.bookPrice.value;
    const bookPages = form.Pages.value;
    const originalPublisher = form.OriginalPublished.value;
    const bookTitle = form.bookTitle.value;
    const bookLanguage = form.bookLanguage.value;
    const bookDescription = form.bookDescription.value;
    const bookAudio = form.bookAudio.value;
    const tags = form.tags.value;

    const userEmail = user?.email;

    const newBook = {
      userEmail,
      bookFile,
      bookCover,
      bookName,
      bookAuthor,
      bookCategory,
      bookPrice,
      bookPages,
      originalPublisher,
      bookTitle,
      bookLanguage,
      bookDescription,
      bookAudio,
      tags,
    };
    PostData({ endPoint: "book", newData: newBook });
  };

  return (
    <form onSubmit={handleBook} className="flex flex-col gap-y-5">
      {/* Book File */}
      <TextInput
        type={"file"}
        htmlFor={"bookFile"}
        id={"bookFile"}
        labelTitle={"book File"}
        name={"bookFile"}
        placeholder={"Select Your Book"}
      />
      {/* cover  */}
      <TextInput
        type={"file"}
        htmlFor={"bookCover"}
        id={"bookCover"}
        labelTitle={"book Cover"}
        name={"bookCover"}
        placeholder={"Select Book Cover"}
      />
      {/* book name  */}
      <TextInput
        type={"text"}
        htmlFor={"bookName"}
        id={"bookName"}
        labelTitle={"book Name"}
        name={"bookName"}
        placeholder={"bookName"}
      />
      {/* Category  */}
      <TextInput
        type={"text"}
        htmlFor={"Category"}
        id={"Category"}
        labelTitle={"book Category"}
        name={"Category"}
        placeholder={"Select Your Book Category"}
      />
      {/* author name  */}
      <TextInput
        type={"text"}
        htmlFor={"bookAuthor"}
        id={"bookAuthor"}
        labelTitle={"book Author"}
        name={"bookAuthor"}
        placeholder={"bookAuthor"}
      />

      {/* price  */}
      <TextInput
        type={"text"}
        htmlFor={"bookPrice"}
        id={"bookPrice"}
        labelTitle={"book Price"}
        name={"bookPrice"}
        placeholder={"Select Your Book Price"}
      />

      {/* Pages  */}
      <TextInput
        type={"text"}
        htmlFor={"Pages"}
        id={"Pages"}
        labelTitle={"book Pages"}
        name={"Pages"}
        placeholder={"Select Your Book Pages"}
      />

      {/* Original Published  */}
      <TextInput
        type={"text"}
        htmlFor={"OriginalPublished"}
        id={"OriginalPublished"}
        labelTitle={"book Original Publisher Name"}
        name={"OriginalPublished"}
        placeholder={"Select Your Book Original Published"}
      />

      {/* title  */}
      <TextInput
        type={"text"}
        htmlFor={"bookTitle"}
        id={"bookTitle"}
        labelTitle={"book Title"}
        name={"bookTitle"}
        placeholder={"book Title"}
      />

      {/* title  */}
      <TextInput
        type={"text"}
        htmlFor={"bookLanguage"}
        id={"bookLanguage"}
        labelTitle={"book Language"}
        name={"bookLanguage"}
        placeholder={"book Language ex: English"}
      />

      {/* description */}
      <div className="bg-gray-200 p-5 rounded w-[900px]">
        <label htmlFor={"description"}>Description</label>
        <textarea
          type={"text"}
          id={"bookDescription"}
          name={"bookDescription"}
          required
          className="w-full h-[300px]"
        />
      </div>

      {/* tags */}
      <TextInput
        type={"text"}
        htmlFor={"tags"}
        id={"tags"}
        labelTitle={"Tag"}
        name={"tags"}
        placeholder={"Minimum 5 tags is required"}
      />
      {/* audio */}
      <TextInput
        type={"text"}
        htmlFor={"bookAudio"}
        id={"bookAudio"}
        labelTitle={"bookAudio"}
        name={"bookAudio"}
        placeholder={"Yes, or No"}
      />
      <div className="flex justify-end">
        <Button type={"submit"} buttonText={"Post Now"} />
      </div>
    </form>
  );
};

export default Book;
