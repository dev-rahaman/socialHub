import { UserIcon } from "@/app/icons/icons";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";

export default function NoticeCard({ data }) {
  return (
    <div>
      <div className="space-y-4 ">
        {data.map((item, idx) => (
          <div className="bg-white p-5 " key={idx}>
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
            <div className="my-3 flex gap-4 text-sm">
              <div className="flex cursor-pointer gap-1">
                <UserIcon /> <span>By administrator</span>
              </div>
              <div className="flex gap-1">
                <UserIcon /> <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
