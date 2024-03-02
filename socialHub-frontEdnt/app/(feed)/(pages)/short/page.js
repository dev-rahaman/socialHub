"use client";
import React, { useEffect, useRef, useState } from "react";
import ShortComponent from "../short/component";
import NextPrevButton from "../short/NextPrevButton";

const cartItems = [
  { id: 1, name: "Item 1", url: "/video1.mp4" },
  { id: 2, name: "Item 2", url: "/video2.mp4" },
  { id: 3, name: "Item 3", url: "/video3.mp4" },
  { id: 4, name: "Item 4", url: "/video4.mp4" },
  { id: 5, name: "Item 5", url: "/video5.mp4" },
  { id: 6, name: "Item 6", url: "/video6.mp4" },
  { id: 7, name: "Item 7", url: "/video7.mp4" },
  { id: 8, name: "Item 8", url: "/video8.mp4" },
  { id: 9, name: "Item 9", url: "/video9.mp4" },
  {
    id: 10,
    name: "Item 10",
    url: "/video10.mp4",
  },
];

const ShortVideo = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex === 0 ? cartItems.length - 1 : prevStartIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex === cartItems.length - 1 ? 0 : prevStartIndex + 1
    );
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  const visibleItems = cartItems.slice(startIndex, startIndex + 1);

  return (
    <div className="w-[720px] flex justify-between">
      <div className="video mt-6">
        <div onWheel={handleScroll}>
          <ul>
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="w-[680px] flex items-center justify-center"
              >
                <video
                  id="myVideo"
                  width="300"
                  height="300"
                  className="w-[283px] h-[500px] outline-none"
                  controls
                  autoPlay
                  loop
                  muted
                  playsinline
                >
                  <source src={item.url} type="video/mp4" />
                </video>

                <ShortComponent />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <NextPrevButton handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

export default ShortVideo;
