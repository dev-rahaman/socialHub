"use client";
import Image from "next/image";
import React, { useState } from "react";
import parse from "html-react-parser";
import FetchData from "@/app/(feed)/Functions/FetchData";

const NoticeDetails = ({ params }) => {
  const [notice, setNotice] = useState([]);
  FetchData({ endPoint: "notice", setData: setNotice });

  const findNotice = notice.find((item) => item._id === params.id);

  return (
    <div className="ms-24 ">
      <div className="lg:w-[500px]">
        <div className="border-b border-dashed pb-5">
          <Image
            src={
              "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
            }
            alt="notice"
            width={100}
            height={100}
          />
          <div className="mt-5 text-center">
            <h3 className="text-2xl font-bold lg:text-3xl">
              {findNotice?.schoolPlace}
            </h3>
            <h2>{findNotice?.schoolWebsite}</h2>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Establish {findNotice?.schoolEstablish}</p>
          <p>Date {findNotice?.noticeDate}</p>
        </div>
        <div>
          <h2 className="mb-6 mt-20 text-center text-4xl font-bold underline">
            Notice No. {findNotice?.noticeNo}
          </h2>
          <p>
            {parse(
              `<div className="inlineContent">${findNotice?.description}</div>`,
            )}
          </p>
          <p>
            {parse(
              `<div className="inlineContent mt-2">${findNotice?.description}</div>`,
            )}
          </p>
          <p>
            {parse(
              `<div className="inlineContent mt-2">${findNotice?.description}</div>`,
            )}
          </p>
        </div>
        <div className="mt-20 flex justify-end">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={
                "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
              }
              alt="notice"
              width={50}
              height={50}
            />
            <h2>Head teacher:</h2>
            <h5 className="text-xl"> {findNotice?.principalName}</h5>
            <h5> {findNotice?.schoolPlace}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
