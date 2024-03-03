import Image from "next/image";
import Link from "next/link";

const ClassDetails = () => {
  return (
    <div className="my-10 lg:space-y-6">
      <div>
        <iframe
          src="https://www.youtube.com/embed/Vy1rEtmxd04?si=mTqrKazM2dPDdVxL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ width: "740px", height: "400px" }}
        ></iframe>
        <h2 className="mt-2 text-2xl">
          Usually a Python function passes its results back using a return
          statement.
        </h2>
      </div>

      <div className="my-5 flex flex-wrap gap-2">
        <Link href={"/classes/classDetails"}>
          <div className="relative h-[255px] w-[230px] overflow-hidden rounded bg-red-500 shadow-lg">
            <div className="relative h-[255px] w-[250px] rounded-lg border border-gray-200 bg-white shadow">
              <Image
                width={230}
                height={195}
                src="/class.png"
                alt="Video Thumbnail"
                className="h-[130px] w-full"
              />
              <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
                27: 51
              </span>
              <figcaption class="mx-3 mt-3 flex ">
                <img
                  class="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                  <div>
                    {/* {item?.title.length > 30 ? (
                      <>{item?.title.slice(0, 35)}...</>
                    ) : (
                      <>{item?.title}</>
                    )} */}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                  <div className="flex gap-2">
                    <p className="text-[14px] text-gray-800">330K Views</p>
                    <p className="text-[14px] text-gray-800">19 Hours</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </Link>
        <Link href={"/classes/classDetails"}>
          <div className="relative h-[255px] w-[230px] overflow-hidden rounded bg-red-500 shadow-lg">
            <div className="relative h-[255px] w-[250px] rounded-lg border border-gray-200 bg-white shadow">
              <Image
                width={230}
                height={195}
                src="/class.png"
                alt="Video Thumbnail"
                className="h-[130px] w-full"
              />
              <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
                27: 51
              </span>
              <figcaption class="mx-3 mt-3 flex ">
                <img
                  class="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                  <div>
                    {/* {item?.title.length > 30 ? (
                      <>{item?.title.slice(0, 35)}...</>
                    ) : (
                      <>{item?.title}</>
                    )} */}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                  <div className="flex gap-2">
                    <p className="text-[14px] text-gray-800">330K Views</p>
                    <p className="text-[14px] text-gray-800">19 Hours</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </Link>
        <Link href={"/classes/classDetails"}>
          <div className="relative h-[255px] w-[230px] overflow-hidden rounded bg-red-500 shadow-lg">
            <div className="relative h-[255px] w-[250px] rounded-lg border border-gray-200 bg-white shadow">
              <Image
                width={230}
                height={195}
                src="/class.png"
                alt="Video Thumbnail"
                className="h-[130px] w-full"
              />
              <span className="absolute right-0 top-[6.50rem] me-2 rounded bg-black px-2.5 py-0.5 text-xs font-medium text-white">
                27: 51
              </span>
              <figcaption class="mx-3 mt-3 flex ">
                <img
                  class="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="profile picture"
                />
                <div class="ms-3 space-y-0.5 text-left font-medium rtl:text-right">
                  <div>
                    {/* {item?.title.length > 30 ? (
                      <>{item?.title.slice(0, 35)}...</>
                    ) : (
                      <>{item?.title}</>
                    )} */}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                  <div className="flex gap-2">
                    <p className="text-[14px] text-gray-800">330K Views</p>
                    <p className="text-[14px] text-gray-800">19 Hours</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ClassDetails;
