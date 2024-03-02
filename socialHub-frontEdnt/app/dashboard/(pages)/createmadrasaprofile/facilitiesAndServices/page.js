"use client";

import { TextInputWithLabel } from "@/app/dashboard/DashboardComponents/SmallComponents";

const FacilitiesAndServices = () => {
  return (
    <>
      <h2 className="text-center">Facilities And Services</h2>
      <div className="flex items-center justify-center w-full">
        <form className="flex lg:w-[500px] flex-col gap-4">
          <TextInputWithLabel
            label={"Beds"}
            placeholder={"Beds"}
            id={"Beds"}
            htmlFor={"Beds"}
          />
          <TextInputWithLabel
            label={"Staff"}
            placeholder={"Number of Staff "}
            id={"Staff"}
            htmlFor={"Staff"}
          />
          <TextInputWithLabel
            label={"allClasses"}
            placeholder={"allClasses"}
            id={"allClasses"}
            htmlFor={"allClasses"}
          />
        </form>
      </div>
    </>
  );
};

export default FacilitiesAndServices;
