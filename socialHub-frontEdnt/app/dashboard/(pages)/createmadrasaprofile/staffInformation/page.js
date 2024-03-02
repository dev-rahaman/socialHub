"use client";
import { TextInputWithLabel } from "@/app/dashboard/DashboardComponents/SmallComponents";

const MedicalStaffInformation = () => {
  return (
    <>
      <h2 className="text-center">Medical Staff Information</h2>
      <div className="flex items-center justify-center w-full">
        <form className="flex lg:w-[500px] flex-col gap-4">
          <div className="mb-2 block">
            <TextInputWithLabel
              label={"madrasa name"}
              placeholder={"madrasa name"}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default MedicalStaffInformation;
