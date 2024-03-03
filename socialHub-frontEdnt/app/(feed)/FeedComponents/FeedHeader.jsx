"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppIcon, NotificationIcon, UserIcon } from "@/app/icons/icons";

const items = [
  { name: "Home", href: "/" },
  { name: "Video", href: "/video" },
  { name: "Short", href: "/short" },
  // { name: "Group", href: "/group" },
  { name: "Marketplace", href: "/marketplace" },
  // { name: "Game", href: "/game" },
];

const FeedHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="custom-bg fixed -top-[0] z-50 flex w-full items-center justify-around px-3  lg:px-10">
        {/* logo  */}
        <div>
          <Link href={"/dashboard"}>
            <Image
              src="https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
              alt="Jamia Rashidia Feni"
              width={50}
              height={50}
            ></Image>
          </Link>
        </div>

        {/* button for sm devices  */}
        <div className="ms-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-[hoverColor] focus:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="flex gap-8">
                  {items.map((item, idx) => (
                    <div key={idx}>
                      <Link href={`${item.href}`} className="custom-text">
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="me-3 flex items-center gap-2">
          <button className="btn rounded-full p-[10px]  text-white">
            <AppIcon />
          </button>
          <button className="btn rounded-full p-[10px]  text-white">
            <NotificationIcon />
          </button>
          <button className="btn rounded-full p-[10px]  text-white">
            <UserIcon />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="custom-bg h-[100%] w-full space-y-1 px-2 pb-3 pt-20 sm:px-3">
          <div className=" gap-8">
            {items.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={`${item.href}`}
                  className="custom-text block rounded-md px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedHeader;
