"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
  { link: "/profile-image.jpg", alt: "name" },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image.link);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 my-5">
        {images.map((item, index) => (
          <>
            <div key={index} className="relative overflow-hidden">
              <Image src={item.link} width={230} height={230} alt={item.alt} />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                <button
                  className="text-white text-xl"
                  onClick={() => openImageModal(item)}
                >
                  View
                </button>
              </div>
            </div>
            {selectedImage && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                <div className="max-w-full max-h-full overflow-auto">
                  <img
                    src={selectedImage}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto"
                  />
                  <button
                    className="text-white absolute top-4 right-4 text-xl cursor-pointer"
                    onClick={closeImageModal}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
