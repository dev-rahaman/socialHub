import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function VideoCard({ data }) {
  return (
    <div>
      <div className="my-5 flex flex-wrap gap-2">
        {data.map((video, idx) => (
          <Link href={`/video/${video?._id}`} key={idx}>
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
                    {video?.title.slice(0, 35)}
                  </span>
                  <p className="text-sm text-gray-800">Dev-Rahaman</p>
                  <div className="flex text-sm">
                    <p className="text-gray-800">
                      Views: {video?.view}&nbsp;•&nbsp;
                    </p>
                    <p className="text-gray-800">{video?.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
