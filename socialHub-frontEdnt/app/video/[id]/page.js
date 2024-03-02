"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import FetchData from "../../Functions/FetchData";
import FetchData from "@/app/(feed)/Functions/FetchData";

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

  return (
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
          <h2 className="mt-2 text-2xl">{findVideo?.writeTittle}</h2>
          <div>
            <p className="pt-4">{getDescriptionToShow()}</p>
            {findVideo?.description && findVideo?.description.length > 200 && (
              <>
                <p className="py-3">{findVideo?.tags}</p>
                <button onClick={toggleDescription} className="text-green-600">
                  {showFullDescription ? "Show less" : "Show more"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="my-5 flex flex-wrap gap-2">
        <Link href={"/classes/classDetails"}>
          <div className="relative h-[255px] w-[230px] overflow-hidden rounded bg-red-500 shadow-lg">
            <Image
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="h-[130px] w-[240px]"
            />
            <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
              27: 51
            </span>
            <div className="mt-2 flex justify-center px-1">
              <Image
                width={30}
                height={30}
                src="/profile-image.jpg"
                alt="Profile"
                className="mx-auto h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <span className="text-center text-sm">
                  Search any image with Google Lens Search any image with Google
                  Lens
                </span>
                <p className="text-sm text-gray-800">Dev-Rahaman</p>
                <div className="flex text-sm">
                  <p className="text-gray-800">Views: 1M&nbsp;•&nbsp;</p>
                  <p className="text-gray-800">1 Day Ago</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/classes/classDetails"}>
          <div className="relative h-[255px] w-[230px] overflow-hidden rounded bg-red-500 shadow-lg">
            <Image
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="h-[130px] w-[240px]"
            />
            <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
              27: 51
            </span>
            <div className="mt-2 flex justify-center px-1">
              <Image
                width={30}
                height={30}
                src="/profile-image.jpg"
                alt="Profile"
                className="mx-auto h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <span className="text-center text-sm">
                  Search any image with Google Lens Search any image with Google
                  Lens
                </span>
                <p className="text-sm text-gray-800">Dev-Rahaman</p>
                <div className="flex text-sm">
                  <p className="text-gray-800">Views: 1M&nbsp;•&nbsp;</p>
                  <p className="text-gray-800">1 Day Ago</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/classes/classDetails"}>
          <div className="relative h-[255px] w-[230px] overflow-hidden rounded bg-red-500 shadow-lg">
            <Image
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="h-[130px] w-[240px]"
            />
            <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
              27: 51
            </span>
            <div className="mt-2 flex justify-center px-1">
              <Image
                width={30}
                height={30}
                src="/profile-image.jpg"
                alt="Profile"
                className="mx-auto h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <span className="text-center text-sm">
                  Search any image with Google Lens Search any image with Google
                  Lens
                </span>
                <p className="text-sm text-gray-800">Dev-Rahaman</p>
                <div className="flex text-sm">
                  <p className="text-gray-800">Views: 1M&nbsp;•&nbsp;</p>
                  <p className="text-gray-800">1 Day Ago</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/classes/classDetails"}>
          <div className="relative h-[255px] w-[230px] overflow-hidden rounded bg-red-500 shadow-lg">
            <Image
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="h-[130px] w-[240px]"
            />
            <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
              27: 51
            </span>
            <div className="mt-2 flex justify-center px-1">
              <Image
                width={30}
                height={30}
                src="/profile-image.jpg"
                alt="Profile"
                className="mx-auto h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <span className="text-center text-sm">
                  Search any image with Google Lens Search any image with Google
                  Lens
                </span>
                <p className="text-sm text-gray-800">Dev-Rahaman</p>
                <div className="flex text-sm">
                  <p className="text-gray-800">Views: 1M&nbsp;•&nbsp;</p>
                  <p className="text-gray-800">1 Day Ago</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/classes/classDetails"}>
          <div className="relative h-[255px] w-[230px] overflow-hidden rounded bg-red-500 shadow-lg">
            <Image
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="h-[130px] w-[240px]"
            />
            <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
              27: 51
            </span>
            <div className="mt-2 flex justify-center px-1">
              <Image
                width={30}
                height={30}
                src="/profile-image.jpg"
                alt="Profile"
                className="mx-auto h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <span className="text-center text-sm">
                  Search any image with Google Lens Search any image with Google
                  Lens
                </span>
                <p className="text-sm text-gray-800">Dev-Rahaman</p>
                <div className="flex text-sm">
                  <p className="text-gray-800">Views: 1M&nbsp;•&nbsp;</p>
                  <p className="text-gray-800">1 Day Ago</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/classes/classDetails"}>
          <div className="relative h-[255px] w-[230px] overflow-hidden rounded bg-red-500 shadow-lg">
            <Image
              width={230}
              height={195}
              src="/class.png"
              alt="Video Thumbnail"
              className="h-[130px] w-[240px]"
            />
            <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
              27: 51
            </span>
            <div className="mt-2 flex justify-center px-1">
              <Image
                width={30}
                height={30}
                src="/profile-image.jpg"
                alt="Profile"
                className="mx-auto h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <span className="text-center text-sm">
                  Search any image with Google Lens Search any image with Google
                  Lens
                </span>
                <p className="text-sm text-gray-800">Dev-Rahaman</p>
                <div className="flex text-sm">
                  <p className="text-gray-800">Views: 1M&nbsp;•&nbsp;</p>
                  <p className="text-gray-800">1 Day Ago</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoDetails;
