"use client";

import { TextInputWithLabel } from "@/app/dashboard/DashboardComponents/SmallComponents";

const ContactInformation = () => {
  return (
    <>
      <h2 className="text-center">Contact Information</h2>
      <div className="flex items-center justify-center w-full">
        <form className="flex lg:w-[500px] flex-col gap-4">
          {/* Phone Number  */}
          <TextInputWithLabel
            label={"Phone Number"}
            placeholder={"Phone Number"}
            id={"PhoneNumber"}
            htmlFor={"PhoneNumber"}
          />

          {/* Email Address  */}
          <TextInputWithLabel
            label={"Email Address"}
            placeholder={"Email Address"}
            id={"EmailAddress"}
            htmlFor={"EmailAddress"}
          />
          {/* Website  */}
          <TextInputWithLabel
            label={"Website"}
            placeholder={"Website"}
            id={"website"}
            htmlFor={"website"}
          />
        </form>
      </div>
    </>
  );
};

export default ContactInformation;
