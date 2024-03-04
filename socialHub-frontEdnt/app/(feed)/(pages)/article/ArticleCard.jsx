import Link from "next/link";
import React from "react";
import parse from "html-react-parser";

export default function ArticleCard({ data }) {
  return (
    <div className="mx-5 mt-24 flex flex-col items-center justify-center lg:mt-0">
      {data.map((article, idx) => (
        <div
          key={idx}
          className="ms-5 mt-5 rounded border-b border-[var(--primary)]"
        >
          <img src={"/image3.jpg"} alt="blogs" className="rounded md:w-full" />
          <div className="p-5 px-2">
            <h2 className="text-[20px]  font-bold capitalize lg:text-3xl">
              {article?.title.length > 50 ? (
                <>{article?.title.slice(0, 50)}</>
              ) : (
                <>{article?.title}</>
              )}
              <b>&hellip;</b>
            </h2>
            <div className="my-1 flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <img
                  src="/girl-1.avif"
                  className="h-10 w-10 rounded-full"
                  alt="uer-image"
                />
                <div className="flex flex-col">
                  <div>
                    <span>By administrator</span>
                    <span> · Follow </span>
                  </div>
                  <span className="">16h</span>
                </div>
              </div>
              <div className="flex  gap-1"></div>
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
