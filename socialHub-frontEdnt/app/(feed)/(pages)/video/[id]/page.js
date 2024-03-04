"use client";
import { useState } from "react";
import FetchData from "@/app/(feed)/Functions/FetchData";
import Link from "next/link";

const videosData = [
  {
    _id: "1",
    thumbnail: "/class.png",
    duration: "27: 51",
    userAbator:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    userName: "27: 51",
    title:
      "This assumes that the data fetched by FetchData is an array of objects with a category property.",
    views: "4551",
    time: "9h",
  },
  {
    _id: "2",
    thumbnail: "/class.png",
    duration: "27: 51",
    userAbator:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    userName: "27: 51",
    title:
      "This assumes that the data fetched by FetchData is an array of objects with a category property.",
    views: "4551",
    time: "9h",
  },
  {
    _id: "3",
    thumbnail: "/class.png",
    duration: "27: 51",
    userAbator:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    userName: "27: 51",
    title:
      "This assumes that the data fetched by FetchData is an array of objects with a category property.",
    views: "4551",
    time: "9h",
  },
  {
    _id: "4",
    thumbnail: "/class.png",
    duration: "27: 51",
    userAbator:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    userName: "27: 51",
    title:
      "This assumes that the data fetched by FetchData is an array of objects with a category property.",
    views: "4551",
    time: "9h",
  },
  {
    _id: "5",
    thumbnail: "/class.png",
    duration: "27: 51",
    userAbator:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    userName: "27: 51",
    title:
      "This assumes that the data fetched by FetchData is an array of objects with a category property.",
    views: "4551",
    time: "9h",
  },
];

const VideoDetails = ({ params }) => {
  const [videos, setVideos] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  FetchData({ endPoint: "video", setData: setVideos });

  const findVideo = videos.find((item) => item._id === params.id);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescriptionToShow = () => {
    const fullDescription = findVideo?.description;
    const maxLength = 150;

    if (
      showFullDescription ||
      !fullDescription ||
      fullDescription.length <= maxLength
    ) {
      return fullDescription;
    }

    return `${fullDescription.slice(0, maxLength)}...`;
  };

  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <div className="ms-10 lg:ms-0">
      <div className="lg:space-y-6">
        <div className="mt-14  lg:mt-6 ">
          <iframe
            src="https://www.youtube.com/embed/Vy1rEtmxd04?si=mTqrKazM2dPDdVxL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="h-auto w-full lg:h-[400px]"
          ></iframe>
          <div className="mt-2 w-full rounded bg-red-500 p-2">
            <h2 className="mt-2 text-2xl">findVideo?.writeTittle</h2>
            <div>
              <p className="pt-4">{getDescriptionToShow()}</p>
              {findVideo?.description &&
                findVideo?.description.length > 200 && (
                  <>
                    <p className="py-3">{findVideo?.tags}</p>
                    <button
                      onClick={toggleDescription}
                      className="text-green-600"
                    >
                      {showFullDescription ? "Show less" : "Show more"}
                    </button>
                  </>
                )}
            </div>
            <span
              onClick={() => handleShowDetails()}
              className="cursor-pointer text-gray-500 hover:text-gray-800"
            >
              Details
            </span>
            {showDetails && (
              <div>
                <h2>
                  This assumes that the data fetched by FetchData is an array of
                  objects with a category property. Adjust the code according to
                  your actual data structu... This assumes that the data fetched
                  by FetchData is an array of objects with a category property.
                  Adjust the code according to your actual data structu...
                </h2>
                <h2 className="my-4">
                  This assumes that the data fetched by FetchData is an array of
                  objects with a category property. Adjust the code according to
                  your actual data structu... This assumes that the data fetched
                  by FetchData is an array of objects with a category property.
                  Adjust the code according to your actual data structu...
                </h2>
                <h2 className="my-4">
                  This assumes that the data fetched by FetchData is an array of
                  objects with a category property. Adjust the code according to
                  your actual data structu... This assumes that the data fetched
                  by FetchData is an array of objects with a category property.
                  Adjust the code according to your actual data structu...
                </h2>
                <h2>
                  This assumes that the data fetched by FetchData is an array of
                  objects with a category property. Adjust the code according to
                  your actual data structu... This assumes that the data fetched
                  by FetchData is an array of objects with a category property.
                  Adjust the code according to your actual data structu...
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
        {videosData.map((item) => (
          <Link href={`/video/`}>
            <div className="relative h-[255px] w-[330px] rounded-lg border border-gray-200 bg-white shadow lg:w-[250px]">
              <img
                width={230}
                height={195}
                src={item?.thumbnail}
                alt="Video Thumbnail"
                className="h-[130px] w-full"
              />
              <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
                {item?.duration}
              </span>
              <figcaption class="mx-3 mt-3 flex ">
                <img
                  className="h-9 w-9 rounded-full"
                  src={item?.userAbator}
                  alt="profile picture"
                />
                <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                  <div>
                    {item?.title.length > 40 ? (
                      <>{item?.title.slice(0, 40)}...</>
                    ) : (
                      <>{item?.title}</>
                    )}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {item?.userName}
                  </div>
                  <div className="flex gap-2">
                    <p className="text-[14px] text-gray-800">
                      {item?.views} Views
                    </p>
                    <p className="text-[14px] text-gray-800">
                      {item?.time} Hours
                    </p>
                  </div>
                </div>
              </figcaption>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoDetails;
