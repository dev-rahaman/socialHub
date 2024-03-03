import Link from "next/link";
import React from "react";
import parse from "html-react-parser";

export default function NoticeCard({ data }) {
  return (
    <div>
      <div className="mt-16 space-y-4 lg:mt-4 ">
        {data.map((item, idx) => (
          <div className="mx-4 ms-10 bg-white p-5 lg:ms-5" key={idx}>
            <Link href={`/notice/${item._id}`}>
              <span className="cursor-pointer">
                {parse(
                  `<div className="inlineContent">${item.description.slice(
                    0,
                    250,
                  )}<b>...</b></div>`,
                )}
              </span>
            </Link>
            {/* <div className="my-3 flex gap-4 text-sm">
              <div className="flex cursor-pointer gap-1">
                <UserIcon /> <span>By administrator</span>
              </div>
              <div className="flex gap-1">
                <UserIcon /> <span>{item.time}</span>
              </div>
            </div> */}
            <figcaption class="mx-4 mt-2 flex ">
              <img
                class="h-9 w-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                <p>Abdur Rahaman Sultany</p>
                <p className="text-[14px] text-gray-800">330K Views</p>
              </div>
            </figcaption>
          </div>
        ))}
      </div>
    </div>
  );
}
