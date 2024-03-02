"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const allMadrasa = [
  {
    image:
      "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png",
    name: "Jamia Rashidia Feni",
    title: "Islamic University",
  },
  {
    image:
      "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png",
    name: "Jamia Rashidia Feni",
    title: "Islamic University",
  },
  {
    image:
      "https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png",
    name: "Jamia Rashidia Feni",
    title: "Islamic University",
  },
];

const footerItem = [
  { content: "About", link: "about" },
  { content: "Accessability", link: "accessability" },
  { content: "Privacy Terms", link: "privacy-terms" },
  { content: "Help Center", link: "Help Center" },
  { content: "Business Services", link: "business-services" },
  { content: "Advertising", link: "advertising" },
  { content: "Add Choose", link: "add-choose" },
  { content: "App", link: "App" },
  { content: "More", link: "more" },
];

const RightSidebar = () => {
  const [follow, setFollow] = useState({});

  const handleFollow = (idx) => {
    setFollow((prevState) => {
      const newFollow = { ...prevState };
      newFollow[idx] = !newFollow[idx];
      return newFollow;
    });
  };

  return (
    <div className="right-sidebar custom-scrollbar hidden h-screen w-[270px] overflow-x-auto p-4  pb-20 leading-6 md:block lg:block ">
      <ul className="custom-bg space-y-3 rounded py-3">
        {allMadrasa.map((madrasa, idx) => (
          <li
            key={idx}
            className="flex cursor-pointer items-start justify-center"
          >
            <Image
              width={50}
              height={50}
              src={madrasa.image}
              alt="Profile"
              className="mr-2 rounded-full"
            />
            <div className="space-y-[3px]">
              <h2 className="font-bold text-white">{madrasa.name}</h2>
              <p className="text-sm text-white">{madrasa.title}</p>
              <button
                className="btn w-[100px] rounded-full p-[4px] text-[20px] text-white"
                onClick={() => handleFollow(idx)}
              >
                {follow[idx] ? "Unfollow" : "Follow"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {footerItem.map((item, idx) => (
          <Link key={idx} href={item.link} className="text-sm hover:underline">
            {item.content}
          </Link>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default RightSidebar;
