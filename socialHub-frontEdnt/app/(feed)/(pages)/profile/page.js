import React from "react";
import ImageUploader from "../../FeedComponents/ImageUploader";
import ProfileLeft from "./profileLeft";

const Profile = () => {
  return (
    <div className="mx-10 mb-10 mt-16 lg:mt-1">
      <img
        src="/profile-back-cover.jpg"
        className="rounded lg:h-[200px] lg:w-[728px]"
        alt="background-img"
      />
      <div className="lg:flex lg:items-center">
        <ImageUploader />
        <div className="ms-0 lg:m-5">
          <div className="lg:flex lg:items-center">
            <h2 className="text-[20px] font-bold lg:text-3xl">
              Abdur Rahaman Sultany
            </h2>
            <h2 className="ms-1 mt-1 text-[20px] font-semibold">
              (Programmer)
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500">3.1K followers • </p>
            <p className="text-gray-500">189 following</p>
          </div>
          <div className="mt-2 flex -space-x-4 rtl:space-x-reverse">
            <img
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
              src="/placholder.svg"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
              src="/class.png"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
              src="/profile-image.jpg"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
              src="/image2.jpg"
              alt=""
            />
            <img
              className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
              src="/placholder.svg"
              alt=""
            />
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +99
            </a>
          </div>
        </div>
      </div>
      <ProfileLeft />
    </div>
  );
};

export default Profile;
