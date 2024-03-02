import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ClassCard({ data }) {
  return (
    <>
      <div className="mb-5 ms-5  flex flex-wrap gap-2 pt-14">
        {data.map((item, idx) => (
          <Link key={idx} href={`/classes/${item._id}`}>
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
                  <span className="text-center text-sm">{item?.title}</span>
                  <p className="text-sm text-gray-800">Dev-Rahaman</p>
                  <div className="flex text-sm">
                    <p className="text-gray-800">Views: 1M&nbsp;•&nbsp;</p>
                    <p className="text-gray-800">{item?.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
