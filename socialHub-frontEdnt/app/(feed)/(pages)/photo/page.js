"use client";
import React, { useState } from "react";

const images = [
  { link: "/class.png", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/dini-ilm.jpg", alt: "name" },
  { link: "/girl-1.avif", alt: "name" },
  { link: "/girl-2.jpg", alt: "name" },
  { link: "/girl-3.jpg", alt: "name" },
  { link: "/girl-4.jpg", alt: "name" },
  { link: "/book.jpg", alt: "name" },
  { link: "/image2.jpg", alt: "name" },
  { link: "/placholder.svg", alt: "name" },
  { link: "/profile-back-cover.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/facebook-imag.svg", alt: "name" },
  { link: "/Bold.svg", alt: "name" },
  { link: "/dini-ilm.jpg", alt: "name" },
  { link: "/fgfd.jpg", alt: "name" },
  { link: "/fafdsaf.jpg", alt: "name" },
  { link: "/dsfds.jpg", alt: "name" },
  { link: "/fdfds.jpg", alt: "name" },
  { link: "/dsfs.jpg", alt: "name" },
  { link: "/frdgd.jpg", alt: "name" },
];

const ImageGallery = () => {
  const [fullscreen, setFullscreen] = useState(
    Array(images.length).fill(false),
  );

  const toggleFullscreen = (index) => {
    const updatedFullscreen = [...fullscreen];
    updatedFullscreen[index] = !updatedFullscreen[index];
    setFullscreen(updatedFullscreen);
  };

  return (
    <>
      <div class="ms-12 mt-16 columns-2 sm:columns-2 sm:gap-1 md:columns-3 lg:mt-4 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {images.map((item, index) => (
          <div key={index} className="my-1">
            <img
              src={item.link}
              alt={item.alt}
              className="w-[200px] cursor-pointer object-cover"
              onClick={() => toggleFullscreen(index)}
            />
            {fullscreen[index] && (
              <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
                <img
                  src={item.link}
                  alt={item.alt}
                  className="max-h-full max-w-full"
                />
                <button
                  onClick={() => toggleFullscreen(index)}
                  className="absolute right-0 top-0 p-2 text-white"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
