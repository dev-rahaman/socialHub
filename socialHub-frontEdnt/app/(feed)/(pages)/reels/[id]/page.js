"use client";
import { useRouter } from "next/navigation";
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

const ReelsDetails = ({ params }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % reels.length;
    setCurrentIndex(nextIndex);
    updateURL(reels[nextIndex].id);
    // console.log(currentIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + reels.length) % reels.length;
    setCurrentIndex(prevIndex);
    updateURL(reels[prevIndex].id);
  };

  const updateURL = (id) => {
    router.push(`/(feed)/reels/${id}`, undefined, { shallow: true });
  };

  const reel = reels.find((reel) => reel.id === params.id);

  return (
    <>
      <div className="w-[720px] flex justify-between">
        <div className="video mt-6">
          <div className="w-[680px] flex items-center justify-center">
            <div id="myVideo" width="300" height="300">
              <ul className="flex  items-center gap-5">
                <button
                  className="left-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
                  onClick={handlePrev}
                >
                  &laquo;
                </button>
                {reel && (
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
                    <source src={reel.url} type="video/mp4" />
                  </video>
                )}
                <button
                  className="right-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
                  onClick={handleNext}
                >
                  &raquo;
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReelsDetails;
