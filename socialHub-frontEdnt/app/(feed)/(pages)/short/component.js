import { LoveIcon, MessageIcon, ShearIcon, ViewIcon } from "@/app/icons/icons";

const ShortComponent = () => {
  return (
    <>
      <div className="absolute right-16 my-5 lg:right-28">
        <div className="mt-5 flex items-center">
          <div className="ms-2 space-y-5">
            <div className="flex flex-col items-center justify-center">
              <ViewIcon />
              <span>{12547}</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <LoveIcon />
              <span>{2145}</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <MessageIcon />
              <span>{2458}</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ShearIcon />
              <span>{35}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortComponent;
