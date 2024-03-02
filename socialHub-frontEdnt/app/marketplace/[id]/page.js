import React from "react";

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

const ProductDetails = ({ params }) => {
  const findProduct = products.find((item) => item.id === parseInt(params.id));

  return (
    <div className="my-5 flex flex-wrap items-center justify-center gap-3">
      {findProduct && (
        <div className="rounded-lg border border-gray-200 bg-white shadow">
          <img
            className="w-full rounded-t-lg"
            src={findProduct?.image}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {findProduct?.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {findProduct?.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Message Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
