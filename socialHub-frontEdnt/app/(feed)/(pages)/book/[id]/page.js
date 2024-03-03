"use client";
import { DropdownTwoIcon, ReportIcon } from "@/app/icons/icons";
import { useState } from "react";
import Link from "next/link";
import FetchData from "@/app/(feed)/Functions/FetchData";

const BookDetails = ({ params }) => {
  const [book, setBook] = useState([]);

  FetchData({ endPoint: "book", setData: setBook });

  const findBook = book.find((item) => item._id === params.id);

  return (
    <>
      <div className="mt-5 flex bg-white p-6 shadow-md">
        <div className="pr-6">
          <div>
            <img
              src="/book.jpg"
              alt="Book Cover"
              className="h-[250px] w-[200px]"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-col items-center justify-center">
              <div>
                <Link
                  href={`${findBook?.bookFile}`}
                  download={`${findBook?.bookName}`}
                  className="flex w-[200px] items-center justify-center bg-[#0E6C14] p-2 text-white "
                >
                  <span>Download</span> <DropdownTwoIcon />
                </Link>
              </div>
              <p className="text-xl text-yellow-500">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </p>
              <p className="ml-2 text-gray-600">550</p>
              <button className="flex items-center justify-center text-blue-500 hover:underline">
                <ReportIcon /> Report
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <img
              src="/book.jpg"
              alt="Book Cover"
              className="h-[50px] w-[50px] rounded"
            />
            <div className="text-gray-600 ">
              <p>{findBook?.bookAuthor}</p>
              <p>{findBook?.time}</p>
            </div>
          </div>
          <h2 className="mt-5 text-4xl font-extrabold text-[#4C4C4C]">
            {findBook?.bookName}
          </h2>
          <h2 className="text-1xl mt-5 font-bold text-[#000000]">
            {findBook?.bookTitle}
          </h2>
          <div className="mt-16 flex gap-2">
            <button className="bg-blue-700 p-2 text-white">Facebook</button>
            <button className="bg-red-600 p-2 text-white">Instagram</button>
            <button className="bg-[#c8232c] p-2 text-white">Linkedin</button>
            <button className="bg-[#0088cc] p-2 text-white">Telegram</button>
          </div>
        </div>
      </div>
      {/* Book Details */}
      <div className="my-5 bg-white p-6 shadow-md">
        <p className="border-b-2 font-bold uppercase text-[#4C4C4C]">
          Description
        </p>
        <p className="py-4">{findBook?.bookDescription}</p>
        <p className="border-b-2 font-bold uppercase text-[#4C4C4C]">
          Detail of {findBook?.bookName}
        </p>

        <table className="mt-5 w-full border border-gray-300 bg-white">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Attribute</th>
              <th className="border-b px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-4 py-2">Book Title</td>
              <td className="border-b px-4 py-2">{findBook?.bookTitle}</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Price</td>
              <td className="border-b px-4 py-2">{findBook?.bookPrice}</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Number of Pages</td>
              <td className="border-b px-4 py-2">{findBook?.bookPages}</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Author Name</td>
              <td className="border-b px-4 py-2">{findBook?.bookAuthor}</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Category</td>
              <td className="border-b px-4 py-2">{findBook?.bookCategory}</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Original Published</td>
              <td className="border-b px-4 py-2">
                {findBook?.originalPublisher}
              </td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Audio</td>
              <td className="border-b px-4 py-2">{findBook?.bookAudio}</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-2">Language</td>
              <td className="border-b px-4 py-2">{findBook?.bookLanguage}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* related books */}
      <div className="flex items-center justify-center gap-5">
        {" "}
        <div className="relative  w-[250px] rounded-lg border border-gray-200 bg-white shadow">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="mb-4 h-[230px] w-full rounded"
          />
          <div className="">
            {/* <h2 className="font-bold">{book.bookName.slice(0, 25)}</h2> */}
            <figcaption class="mx-3 flex ">
              <img
                class="h-9 w-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                <div>
                  {/* {book.bookAuthor.length > 15 ? (
                  <>{book.bookAuthor.slice(0, 16)}...</>
                ) : (
                  <>{book.bookAuthor}</>
                )} */}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  CTO at Google
                </div>
              </div>
            </figcaption>
            <div className="books-center mx-3 mb-2 mt-2 flex items-center justify-between">
              <span className="font-semibold text-green-500">
                <span className="select-none">$</span>
                {/* {book.bookPrice} */}
              </span>
              <Link href={`/book`} className="bg-green-500 p-1 text-white">
                Details
              </Link>
            </div>
          </div>
        </div>
        <div className="relative  w-[250px] rounded-lg border border-gray-200 bg-white shadow">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="mb-4 h-[230px] w-full rounded"
          />
          <div className="">
            {/* <h2 className="font-bold">{book.bookName.slice(0, 25)}</h2> */}
            <figcaption class="mx-3 flex ">
              <img
                class="h-9 w-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                <div>
                  {/* {book.bookAuthor.length > 15 ? (
                  <>{book.bookAuthor.slice(0, 16)}...</>
                ) : (
                  <>{book.bookAuthor}</>
                )} */}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  CTO at Google
                </div>
              </div>
            </figcaption>
            <div className="books-center mx-3 mb-2 mt-2 flex items-center justify-between">
              <span className="font-semibold text-green-500">
                <span className="select-none">$</span>
                {/* {book.bookPrice} */}
              </span>
              <Link href={`/book`} className="bg-green-500 p-1 text-white">
                Details
              </Link>
            </div>
          </div>
        </div>
        <div className="relative  w-[250px] rounded-lg border border-gray-200 bg-white shadow">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="mb-4 h-[230px] w-full rounded"
          />
          <div className="">
            {/* <h2 className="font-bold">{book.bookName.slice(0, 25)}</h2> */}
            <figcaption class="mx-3 flex ">
              <img
                class="h-9 w-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                <div>
                  {/* {book.bookAuthor.length > 15 ? (
                  <>{book.bookAuthor.slice(0, 16)}...</>
                ) : (
                  <>{book.bookAuthor}</>
                )} */}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  CTO at Google
                </div>
              </div>
            </figcaption>
            <div className="books-center mx-3 mb-2 mt-2 flex items-center justify-between">
              <span className="font-semibold text-green-500">
                <span className="select-none">$</span>
                {/* {book.bookPrice} */}
              </span>
              <Link href={`/book`} className="bg-green-500 p-1 text-white">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
