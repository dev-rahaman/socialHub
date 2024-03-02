import { TextInputWithLabel } from "@/app/dashboard/DashboardComponents/SmallComponents";

const BasicInformation = () => {
  return (
    <>
      <h2 className="text-center">Basic Information</h2>
      <div className="flex items-center justify-center w-full">
        <form className="flex lg:w-[500px] flex-col gap-4">
          <TextInputWithLabel
            label={"School name"}
            placeholder={"School name"}
            id={"SchoolName"}
            htmlFor={"SchoolName"}
          />
          <TextInputWithLabel
            label={"village"}
            placeholder={"village"}
            id={"village"}
            htmlFor={"village"}
          />
          <TextInputWithLabel
            label={"district"}
            placeholder={"district"}
            id={"district"}
            htmlFor={"district"}
          />
          <TextInputWithLabel
            label={"established"}
            placeholder={"established"}
            id={"established"}
            htmlFor={"established"}
          />
          <TextInputWithLabel
            label={"registration"}
            placeholder={"registration"}
            id={"registration"}
            htmlFor={"registration"}
          />
          {/* Description */}
          <TextInputWithLabel
            label={"Description"}
            placeholder={"Description"}
            id={"Description"}
            htmlFor={"Description"}
          />

          <div className="flex items-center justify-end">
            <button>
              <button>
                <svg
                  className="w-6 h-6 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BasicInformation;
