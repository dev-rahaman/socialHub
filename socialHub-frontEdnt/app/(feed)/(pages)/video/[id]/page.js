"use client";
import { useState } from "react";
import FetchData from "@/app/(feed)/Functions/FetchData";
import Link from "next/link";

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
    <>
      {" "}
      <div className="my-10 lg:space-y-6">
        <div>
          <iframe
            src="https://www.youtube.com/embed/Vy1rEtmxd04?si=mTqrKazM2dPDdVxL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ width: "740px", height: "400px" }}
          ></iframe>
          <div className="mt-2 rounded bg-gray-200 p-2">
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
      <div className="flex items-center justify-center gap-4">
        <Link href={`/video/`}>
          <div className="relative h-[255px] w-[250px] rounded-lg border border-gray-200 bg-white shadow">
            <img
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="h-[130px] w-full"
            />
            <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
              27: 51
            </span>
            <figcaption class="mx-3 mt-3 flex ">
              <img
                class="h-9 w-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                <div>
                  {/* {video?.title.length > 40 ? (
                  <>{video?.title.slice(0, 40)}...</>
                ) : (
                  <>{video?.title}</>
                )} */}
                  findVideo?.writeTittle
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  CTO at Goog
                </div>
                <div className="flex gap-2">
                  <p className="text-[14px] text-gray-800">330K Views</p>
                  <p className="text-[14px] text-gray-800">19 Hours</p>
                </div>
              </div>
            </figcaption>
          </div>
        </Link>
        <Link href={`/video/`}>
          <div className="relative h-[255px] w-[250px] rounded-lg border border-gray-200 bg-white shadow">
            <img
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="h-[130px] w-full"
            />
            <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
              27: 51
            </span>
            <figcaption class="mx-3 mt-3 flex ">
              <img
                class="h-9 w-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                <div>
                  {/* {video?.title.length > 40 ? (
                  <>{video?.title.slice(0, 40)}...</>
                ) : (
                  <>{video?.title}</>
                )} */}
                  findVideo?.writeTittle
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  CTO at Goog
                </div>
                <div className="flex gap-2">
                  <p className="text-[14px] text-gray-800">330K Views</p>
                  <p className="text-[14px] text-gray-800">19 Hours</p>
                </div>
              </div>
            </figcaption>
          </div>
        </Link>
        <Link href={`/video/`}>
          <div className="relative h-[255px] w-[250px] rounded-lg border border-gray-200 bg-white shadow">
            <img
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="h-[130px] w-full"
            />
            <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
              27: 51
            </span>
            <figcaption class="mx-3 mt-3 flex ">
              <img
                class="h-9 w-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                <div>
                  {/* {video?.title.length > 40 ? (
                  <>{video?.title.slice(0, 40)}...</>
                ) : (
                  <>{video?.title}</>
                )} */}
                  findVideo?.writeTittle
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  CTO at Goog
                </div>
                <div className="flex gap-2">
                  <p className="text-[14px] text-gray-800">330K Views</p>
                  <p className="text-[14px] text-gray-800">19 Hours</p>
                </div>
              </div>
            </figcaption>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VideoDetails;
