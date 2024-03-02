"use client";
import Link from "next/link";
import React, { useState } from "react";

const reels = [
  { id: "1ldkvjhdflnfdsrefer", name: "Item 1", url: "/video1.mp4" },
  { id: "2dkvjhdflnfdsafdsfe", name: "Item 2", url: "/video2.mp4" },
  { id: "3ldkvjfdsfdsahdflne", name: "Item 3", url: "/video3.mp4" },
  { id: "4ldkvjhfdsafdsafdfln", name: "Item 4", url: "/video4.mp4" },
  { id: "5ldkvafewrfcxvcvjhdf", name: "Item 5", url: "/video5.mp4" },
  { id: "6ldkvjfdsafdhdflner", name: "Item 6", url: "/video6.mp4" },
  { id: "7ldkvjvasrfewrfhdfl", name: "Item 7", url: "/video7.mp4" },
  { id: "8ldkvjhrevdfbcdflne", name: "Item 8", url: "/video8.mp4" },
  { id: "9ffgerbgere223434ff", name: "Item 9", url: "/video9.mp4" },
  { id: "10ldkvjhd23tgfgbfln", name: "Item 10", url: "/video10.mp4" },
];

const Reels = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex === 0 ? reels.length - 4 : prevStartIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex === reels.length - 4 ? 0 : prevStartIndex + 1
    );
  };

  const visibleItems = reels.slice(startIndex, startIndex + 4);

  return (
    <>
      <div className="bg-white p-4 rounded shadow-md relative overflow-hidden">
        <button
          className="z-50 absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
          onClick={handlePrev}
        >
          &laquo;
        </button>
        <button
          className="z-50 absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
          onClick={handleNext}
        >
          &raquo;
        </button>
        <ul className="flex gap-5">
          {visibleItems.map((item) => (
            <Link href={`/(feed)/reels/${item.id}`} key={item.id}>
              <video
                key={item.id}
                width="300"
                height="300"
                className="w-[160px] h-[250px] outline-none"
                controls
                muted
              >
                <source src={item.url} type="video/mp4" />
              </video>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Reels;
