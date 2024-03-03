import React from "react";
import {
  FaInstagram,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaPinterest,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import { RiBriefcaseLine } from "react-icons/ri";
import { TfiInfoAlt } from "react-icons/tfi";
import { FaHeart, FaHome } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const photos = [
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
  {
    _id: "1",
    image: "/class.png",
    name: "Jobayer Hossen",
  },
];

const ProfileLeft = () => {
  return (
    <>
      <h2 className="mb-2 mt-5 text-2xl font-bold">Intro</h2>
      <>
        <div>
          <div className="mt-2 gap-3 lg:flex lg:items-center">
            <h2 className="font-bold">BIO</h2>
            <span className="font-[500]">
              Web Developer | MERN Stack | Innovative Solutions | and
              transforming ideas into Reality
            </span>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <TfiInfoAlt size={20} />
            <span className="font-[500]">Profile · Entrepreneur</span>
          </div>
          <div className="mt-2 flex gap-3">
            <RiBriefcaseLine size={20} />
            <span className="w-[300px] font-[500] lg:w-full">
              Full stack website developer and web application developer at
              Upwork
            </span>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <RiBriefcaseLine size={20} />
            <span className="font-[500]">Web-developer at Fiverr</span>
          </div>
          <div className="mt-2 flex items-center gap-3 font-[500]">
            <FaHeart size={20} />
            <span>Single</span>
          </div>
          <div className="mt-2 flex items-center gap-3 font-[500]">
            <FaHome size={20} />
            <span>Comilla</span>
          </div>
          <div className="mt-2 flex items-center gap-3 font-[500]">
            <IoLocationOutline size={20} />
            <span>From Comilla</span>
          </div>
          <div className="social-icons">
            <div className="mt-2 flex items-center gap-3 font-[500]">
              <FaInstagram size={20} />
              <span>Dev_Rahaman</span>
            </div>
            <div className="mt-2 flex items-center gap-3 font-[500]">
              <FaGlobe size={20} />
              <span>Dev_Rahaman</span>
            </div>
            <div className="mt-2 flex items-center gap-3 font-[500]">
              <FaTwitter size={20} />
              <span>Dev_Rahaman</span>
            </div>
            <div className="mt-2 flex items-center gap-3 font-[500]">
              <FaLinkedin size={20} />
              <span>Dev_Rahaman</span>
            </div>
            <div className="mt-2 flex items-center gap-3 font-[500]">
              <FaPinterest size={20} />
              <span>Dev_Rahaman</span>
            </div>
            <div className="mt-2 flex items-center gap-3 font-[500]">
              <FaYoutube size={20} />
              <span>Dev_Rahaman</span>
            </div>
            <div className="mt-2 flex items-center gap-3 font-[500]">
              <FaPhone size={20} />
              <span>0160131225588</span>
            </div>
            <div className="mt-2 flex items-center gap-3 font-[500]">
              <FaWhatsapp size={20} />
              <span>0160131225588</span>
            </div>
          </div>
        </div>
      </>

      <h2 className="mb-2 mt-5 text-2xl font-bold">Friends</h2>
      <div className="flex flex-wrap  items-center gap-3">
        {photos.map((item) => (
          <div className="w-20 lg:w-28 ">
            <img
              class="roun ded h-20 w-20 lg:w-28"
              src={item?.image}
              alt="Large avatar"
            />
            <h2>Jobayer Hossen</h2>
          </div>
        ))}
      </div>

      <h2 className="mb-2 mt-5 text-2xl font-bold">Photos</h2>
      <div className="flex flex-wrap  items-center gap-3">
        {photos.map((item) => (
          <div className="w-20 lg:w-28 ">
            <img
              class="roun ded h-20 w-20 lg:w-28"
              src={item?.image}
              alt="Large avatar"
            />
            <h2>Jobayer Hossen</h2>
          </div>
        ))}
      </div>
      <h2 className="mb-2 mt-5 text-2xl font-bold">Posts</h2>
    </>
  );
};

export default ProfileLeft;
