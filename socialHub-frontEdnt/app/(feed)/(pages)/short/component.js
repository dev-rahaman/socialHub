import { LoveIcon, MessageIcon, ShearIcon, ViewIcon } from "@/app/icons/icons";

const ShortComponent = () => {
  return (
    <>
      <div className="my-5">
        <div className="flex items-center mt-5">
          <div className="space-y-5 ms-2">
            <div className="flex items-center justify-center flex-col">
              <ViewIcon />
              <span>{12547}</span>
            </div>
            <div className="flex items-center justify-center flex-col ">
              <LoveIcon />
              <span>{2145}</span>
            </div>
            <div className="flex items-center justify-center flex-col">
              <MessageIcon />
              <span>{2458}</span>
            </div>
            <div className="flex items-center justify-center flex-col">
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
