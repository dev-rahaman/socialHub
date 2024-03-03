"use client";
import Link from "next/link";
import { DropdownIcon } from "@/app/icons/icons";
import { useState } from "react";

const menus = [
  { name: "Home", link: "/", icon: "🏠" },
  { name: "Your Video", link: "your-video", icon: "🎥" },
  { name: "Shorts", link: "shorts", icon: "▶️" },
  { name: "Events", link: "events", icon: "⚡" },
  { name: "Watch later", link: "watch-later", icon: "⏰" },
  { name: "Liked Video", link: "liked-video", icon: "👍" },
  { name: "Trending Video", link: "trending-video", icon: "📈" },
  { name: "Music", link: "music", icon: "🎵" },
  { name: "Gaming", link: "gaming", icon: "🎮" },
  { name: "Sport", link: "sport", icon: "⚽" },
  { name: "Notifications", link: "notifications", icon: "🔔" },
  { name: "History", link: "video-history", icon: "🕰️" },
];

export const Item = ({ name, link, icon }) => {
  return (
    <li>
      <Link
        href={link}
        className="group flex items-center rounded-lg p-2 text-[18px] transition hover:bg-gray-200 hover:text-black"
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
          className="group flex w-full cursor-pointer items-center rounded-lg p-2 pl-0 ps-2 text-[18px] text-base transition duration-75 hover:bg-gray-200 hover:text-black"
          onClick={toggleDropdown}
        >
          <div className="me-2">{icon}</div>
          <div className="flex w-full items-center">
            {title}
            <div className="ms-5 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-gray-300">
              <DropdownIcon />
            </div>
          </div>
        </div>
      </li>

      <li className="block lg:hidden">
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

const VideoLeftSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ul
      className={`left-sidebar custom-scrollbar fixed h-screen w-[60px] overflow-x-auto px-1 pb-20 leading-6 lg:w-[270px] ${
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
        ),
      )}
    </ul>
  );
};

export default VideoLeftSidebar;
