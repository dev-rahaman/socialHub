import Link from "next/link";
import React from "react";

export default function BookCard({ data }) {
  return (
    <>
      <div className="mb-5 ms-5  mt-14 flex flex-wrap gap-3">
        {data.map((book, idx) => (
          <div className="relative  w-[250px] rounded-lg border border-gray-200 bg-white shadow">
            <img
              src="/book.jpg"
              alt="Book Cover"
              className="mb-4 h-[200px] w-full rounded"
            />
            <div className="p-2">
              {/* <h2 className="font-bold">{book.bookName.slice(0, 25)}</h2> */}
              <figcaption class="mx-3 mt-3 flex ">
                <img
                  class="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                  <div className="h-[20px] bg-red-400">{book.bookAuthor}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
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
    </>
  );
}
