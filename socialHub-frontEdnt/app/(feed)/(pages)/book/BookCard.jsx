import Link from "next/link";
import React from "react";

export default function BookCard({ data }) {
  return (
    <div className="mb-5 ms-5  mt-14 flex flex-wrap gap-2">
      {data.map((book, idx) => (
        <div key={idx} className="h-[335px] w-[230px] shadow-md">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="mb-4 h-[200px] w-[230px] rounded"
          />
          <div className="p-2">
            <h2 className="font-bold">{book.bookName.slice(0, 25)}</h2>
            <p className="my-2 text-gray-600">{book.bookAuthor}</p>
            <div className="books-center flex justify-between">
              <span className="font-semibold text-green-500">
                {book.bookPrice}
              </span>
              <Link
                href={`/book/${book._id}`}
                className="bg-green-500 p-1 text-white"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
