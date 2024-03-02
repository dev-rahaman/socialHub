import React from "react";
import { Input } from "../video/page";
import { Button,  } from "../../DashboardComponents/SmallComponents";

const DonationInformation = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <Input
        labelTitle={"বিকাশ"}
        inputId={"bkash"}
        labelName={"bkash"}
        name={"bkash"}
        paragraph={"এখানে মাদ্রাসার বিকাশ নাম্বার দিন।"}
        type={"text"}
        placeholder={"বিকাশ নাম্বার দিন"}
      />
      <Input
        labelTitle={"নগদ"}
        inputId={"nogod"}
        labelName={"nogod"}
        name={"nogod"}
        paragraph={"এখানে মাদ্রাসার nogod নাম্বার দিন।"}
        type={"text"}
        placeholder={"nogod নাম্বার দিন"}
      />
      <Input
        labelTitle={"ব্যাংক একাউন্ট"}
        inputId={"nogod"}
        labelName={"nogod"}
        name={"nogod"}
        paragraph={"এখানে মাদ্রাসার ব্যাংক একাউন্ট নাম্বার দিন।"}
        type={"text"}
        placeholder={"ব্যাংক একাউন্ট নাম্বার দিন"}
      />
      <Input
        labelTitle={"ব্যাংক একাউন্ট 2"}
        inputId={"nogod"}
        labelName={"nogod"}
        name={"nogod"}
        paragraph={"এখানে মাদ্রাসার ব্যাংক একাউন্ট নাম্বার দিন।"}
        type={"text"}
        placeholder={"ব্যাংক একাউন্ট নাম্বার দিন"}
      />
      <Input
        labelTitle={"ব্যাংক একাউন্ট 3"}
        inputId={"nogod"}
        labelName={"nogod"}
        name={"nogod"}
        paragraph={"এখানে মাদ্রাসার ব্যাংক একাউন্ট নাম্বার দিন।"}
        type={"text"}
        placeholder={"ব্যাংক একাউন্ট নাম্বার দিন"}
      />
      <div className="flex justify-end">
        <Button buttonText={"Post Now"} />
      </div>
    </div>
  );
};

export default DonationInformation;
