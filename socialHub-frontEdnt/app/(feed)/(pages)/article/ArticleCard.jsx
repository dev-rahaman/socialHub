import { UserIcon } from "@/app/icons/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";

export default function ArticleCard({ data }) {
  return (
    <div>
      {data.map((article, idx) => (
        <div
          key={idx}
          className="mt-5 rounded border-b border-[var(--primary)] lg:h-[560px] lg:w-[500px]"
        >
          <Image
            src={"/image3.jpg"}
            alt="blogs"
            width={500}
            height={500}
            className="rounded md:w-full"
          />
          <div className="p-5 px-2">
            <h2 className="text-3xl font-bold capitalize">
              {article?.title?.slice(0, 59)}
              <b>&hellip;</b>
            </h2>
            <div className="my-5 flex gap-4 text-sm">
              <div className="flex gap-1">
                <UserIcon /> <span>By administrator</span>
              </div>
              <div className="flex gap-1">
                <UserIcon /> <span>item.time</span>
              </div>
            </div>
            <div className="inlineContent inline">
              {parse(`${article?.value.slice(0, 100)}`)} <b>&hellip;</b>
            </div>
            <Link
              href={`/article/${article._id}`}
              className="mt-3 block text-[#ea8b26]"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
