import { ArrowToBottom, ArrowToUp } from "@/app/icons/icons";
import React from "react";

const NextPrevButton = ({ handlePrev, handleNext }) => {
  return (
    <div className="mt-10 flex flex-col gap-[440px]">
      <button
        className="block left-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={handlePrev}
      >
        <ArrowToUp />
      </button>
      <button
        className="block right-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded"
        onClick={handleNext}
      >
        <ArrowToBottom />
      </button>
    </div>
  );
};

export default NextPrevButton;
