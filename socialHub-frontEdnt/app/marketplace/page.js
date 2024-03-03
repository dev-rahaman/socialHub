import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Noteworthy technology acquisitions 2021",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: "/dini-ilm.jpg",
    category: "Clothing",
    price: 19.99,
  },
  {
    id: 2,
    name: "Noteworthy technology acquisitions 2021",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: "/dini-ilm.jpg",
    category: "Clothing",
    price: 29.99,
  },
  {
    id: 3,
    name: "Noteworthy technology acquisitions 2021",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: "/dini-ilm.jpg",
    category: "Electronics",
    price: 99.99,
  },
  {
    id: 4,
    name: "Noteworthy technology acquisitions 2021",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: "/dini-ilm.jpg",
    category: "Clothing",
    price: 19.99,
  },
  {
    id: 5,
    name: "Noteworthy technology acquisitions 2021",
    description:
      " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: "/dini-ilm.jpg",
    category: "Clothing",
    price: 29.99,
  },
];

const Marketplace = () => {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-3 lg:mt-5">
      {products.map((item) => (
        <div className="ms-8 w-[320px] rounded-lg border border-gray-200 bg-white shadow lg:ms-0 lg:w-[250px]">
          <Link href={`marketplace/${item?.id}`}>
            <img className="rounded-t-lg" src={item?.image} alt="" />
          </Link>
          <div className="p-5">
            <Link href={`marketplace/${item?.id}`}>
              <h5 className="mb-2 text-[18px] font-bold tracking-tight text-gray-900 ">
                {item?.name}
              </h5>
            </Link>
            <p className="mb-3 text-[15px] font-normal text-gray-700 dark:text-gray-400">
              {item?.description}
            </p>
            <Link
              href={`marketplace/${item?.id}`}
              className="inline-flex items-center gap-1 rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
              <FaArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marketplace;
