"use client";
import Image from "next/image";
import Link from "next/link";
import { AppIcon, NotificationIcon } from "@/app/icons/icons";
import { FaSearch } from "react-icons/fa";

import { IoHome } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import { IoChatbubbleSharp } from "react-icons/io5";

const items = [
  { icon: <IoHome size={25} />, href: "/" },
  { icon: <MdOutlineOndemandVideo size={25} />, href: "/video" },
  { icon: <SiYoutubeshorts size={25} />, href: "/short" },
  { icon: <FaBagShopping size={25} />, href: "/marketplace" },
];

const FeedHeader = () => {
  return (
    <>
      <nav className="custom-bg fixed -top-[0] z-50 flex w-full items-center justify-center px-3  lg:px-10">
        {/* left side */}
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

        {/* middle side  */}
        <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="flex gap-16">
                  {items.map((item, idx) => (
                    <div key={idx}>
                      <Link href={`${item.href}`} className="custom-text">
                        {item.icon}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right  in the large device*/}
        <div className="me-3 flex items-center gap-2">
          <button className="btn rounded-full p-[10px]  text-white">
            <AppIcon />
          </button>
          <button className="btn rounded-full p-[10px]  text-white">
            <NotificationIcon />
          </button>
          <button className="btn rounded-full p-[10px]  text-white">
            <IoChatbubbleSharp />
          </button>
          <button className="btn rounded-full p-[10px]  text-white">
            <FaSearch />
          </button>
        </div>
      </nav>

      {/* sm devices  */}
      <div className="custom-bg fixed z-50 flex h-[50px] w-full items-center justify-around lg:hidden">
        {items.map((item, idx) => (
          <div key={idx}>
            <Link
              href={`${item.href}`}
              className="custom-text py-2text-base rounded-md px-3"
            >
              {item.icon}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeedHeader;
