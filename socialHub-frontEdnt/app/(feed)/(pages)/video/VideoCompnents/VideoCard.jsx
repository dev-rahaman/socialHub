import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function VideoCard({ data }) {
  return (
    <div>
      <div className="mx-4 mt-5 flex flex-wrap items-center justify-center gap-3">
        {data.map((video, idx) => (
          <Link href={`/video/${video?._id}`} key={idx}>
            <div className="relative ms-5 w-[310px] rounded-lg border border-gray-200 bg-white shadow lg:ms-0 lg:w-[250px]">
              <Image
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
                    {video?.title.length > 40 ? (
                      <>{video?.title.slice(0, 40)}...</>
                    ) : (
                      <>{video?.title}</>
                    )}
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
        ))}
      </div>
    </div>
  );
}
