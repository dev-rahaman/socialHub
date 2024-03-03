"use client";
import Link from "next/link";
import React, { useState } from "react";

const items = [
  { name: "Vehicles", link: "/Vehicles", icon: "🚗" },
  { name: "Property Rentals", link: "/property-rentals", icon: "🌟" },
  { name: "Apparel", link: "/apparel", icon: "👕" },
  { name: "Classifieds", link: "/classifieds", icon: "📰" },
  { name: "Electronics", link: "/electronics", icon: "📱" },
  { name: "Entertainment", link: "/entertainment", icon: "🎬" },
  { name: "Family", link: "/family", icon: "👨‍👩‍👧‍👦" },
  { name: "Free Stuff", link: "/free-stuff", icon: "🆓" },
  { name: "Garden & Outdoor", link: "/garden-outdoor", icon: "🌳" },
  { name: "Hobbies", link: "/hobbies", icon: "🎨" },
  { name: "Home Goods", link: "/home-goods", icon: "🏠" },
  {
    name: "Home Improvement",
    link: "/home-improvement",
    icon: "🔧",
  },
  { name: "Home Sales", link: "/home-sales", icon: "🏡" },
  { name: "Musical Instruments", link: "/musical-instruments", icon: "🎸" },
  { name: "Office Supplies", link: "/office-supplies", icon: "📎" },
  { name: "Pet Supplies", link: "/pet-supplies", icon: "🐶" },
  { name: "Sporting Goods", link: "/sporting-goods", icon: "⚽" },
  { name: "Toys & Games", link: "/toys-games", icon: "🎲" },
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

const MarketplaceSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ul
      className={`left-sidebar custom-scrollbar fixed h-screen w-[60px] overflow-x-auto px-1 pb-20 leading-6 lg:w-[270px] ${
        isHovered ? "show-scrollbar" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {items.map((item, idx) =>
        "dropdown" in item ? (
          <DropdownMenu key={idx} {...item.dropdown[0]} />
        ) : (
          <Item key={idx} {...item} />
        ),
      )}
    </ul>
  );
};

export default MarketplaceSidebar;
