"use client";
import Link from "next/link";
import {
  BlogIcon,
  BookIcon,
  ClassIcon,
  DropdownIcon,
  EventIcon,
  HomeIcon,
  NoticeIcon,
  PhotoIcon,
  VideoIcon,
} from "@/app/icons/icons";
import { MdHistory } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

import { useState } from "react";

const menus = [
  {
    name: "Profile",
    link: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    dropdown: [
      {
        title: "School",
        icon: <BookIcon />,
        dropdownItems: [
          {
            name: "Classes",
            icon: <ClassIcon />,
            link: "/dashboard/class",
          },
          { name: "Books", icon: <BookIcon />, link: "/dashboard/book" },
          {
            name: "Notice",
            icon: <NoticeIcon />,
            link: "/dashboard/notice",
          },
        ],
      },
    ],
  },
  {
    name: "Article",
    link: "/dashboard/article",
    icon: <BlogIcon />,
  },
  {
    name: "Short",
    link: "/dashboard/short",
    icon: <SiYoutubeshorts />,
  },
  {
    name: "Video",
    link: "/dashboard/video",
    icon: <VideoIcon />,
  },
  {
    name: "Photo",
    link: "/dashboard/photo",
    icon: <PhotoIcon />,
  },
  {
    name: "Event",
    link: "/dashboard/event",
    icon: <EventIcon />,
  },
  {
    name: "Group",
    link: "/dashboard/group",
    icon: <EventIcon />,
  },
  {
    name: "Marketplace",
    link: "/dashboard/marketplace",
    icon: <EventIcon />,
  },
  {
    name: "Game",
    link: "/dashboard/game",
    icon: <EventIcon />,
  },
  {
    name: "Mail",
    link: "/dashboard/mail",
    icon: <NoticeIcon />,
  },
  {
    name: "Premium",
    link: "/dashboard/premium",
    icon: <NoticeIcon />,
  },
  {
    name: "History",
    link: "/dashboard/history",
    icon: <MdHistory />,
  },
];

export const Item = ({ name, link, icon }) => {
  return (
    <li>
      <Link
        href={link}
        className="flex items-center p-2 text-[18px] rounded-lg group transition hover:bg-[#25454d] hover:text-white"
      >
        <div className="me-2">{icon}</div>

        <span className="hidden sm:inline">{name}</span>
      </Link>
    </li>
  );
};

const DropdownMenu = ({ title, icon, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li className="hidden lg:block">
        <div
          className="hover:bg-[#25454d] hover:text-white flex items-center w-full p-2 pl-0 text-[18px] cursor-pointer ps-2 text-base transition duration-75 rounded-lg group"
          onClick={toggleDropdown}
        >
          <div className="me-2">{icon}</div>
          <div className="w-full flex items-center">
            {title}
            <div className="ms-5 flex items-center justify-center w-[25px] h-[25px] rounded-full bg-gray-300">
              <DropdownIcon />
            </div>
          </div>
        </div>

        {isOpen && (
          <ul className="ms-4">
            {dropdownItems.map((item, idx) => (
              <div key={idx}>
                <Item {...item} />
              </div>
            ))}
          </ul>
        )}
      </li>

      <li className="lg:hidden block">
        <ul className="">
          {dropdownItems.map((item, idx) => (
            <div key={idx}>
              <Item {...item} />
            </div>
          ))}
        </ul>
      </li>
    </>
  );
};

const DashboardSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-[500px] lg:w-[270px] lg:mt-8 rounded-3xl lg:ms-10 ms-2 custom-bg fixed top-8 left-0 z-40 transition-transform sm:translate-x-0`}
    >
      <ul
        className={`overflow-y-auto overflow-x-hidden custom-scrollbar h-[460px] text-white my-5 ${
          isHovered ? "show-scrollbar" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {menus.map((item, idx) =>
          "dropdown" in item ? (
            <DropdownMenu key={idx} {...item.dropdown[0]} />
          ) : (
            <Item key={idx} {...item} />
          )
        )}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
