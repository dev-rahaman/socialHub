"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const studyTags = [
  { id: 1, tag: "programming" },
  { id: 2, tag: "mathematics" },
  { id: 3, tag: "medical" },
  { id: 4, tag: "biology" },
  { id: 5, tag: "chemistry" },
  { id: 6, tag: "physics" },
  { id: 7, tag: "engineering" },
  { id: 8, tag: "computerScience" },
  { id: 9, tag: "dataScience" },
  { id: 10, tag: "psychology" },
  { id: 11, tag: "sociology" },
  { id: 12, tag: "history" },
  { id: 13, tag: "literature" },
  { id: 14, tag: "languages" },
  { id: 15, tag: "philosophy" },
  { id: 16, tag: "economics" },
  { id: 17, tag: "business" },
  { id: 18, tag: "finance" },
  { id: 19, tag: "marketing" },
  { id: 20, tag: "law" },
  { id: 21, tag: "environmentalScience" },
  { id: 22, tag: "geography" },
  { id: 23, tag: "astronomy" },
  { id: 24, tag: "nutrition" },
  { id: 25, tag: "health" },
  { id: 26, tag: "art" },
  { id: 27, tag: "music" },
  { id: 28, tag: "film" },
  { id: 29, tag: "architecture" },
  { id: 30, tag: "education" },
  { id: 31, tag: "communication" },
  { id: 32, tag: "politicalScience" },
  { id: 33, tag: "socialWork" },
  { id: 34, tag: "anthropology" },
  { id: 35, tag: "philanthropy" },
  { id: 36, tag: "religiousStudies" },
  { id: 37, tag: "sportScience" },
  { id: 38, tag: "geology" },
  { id: 39, tag: "meteorology" },
  { id: 40, tag: "statistics" },
  { id: 41, tag: "logic" },
  { id: 42, tag: "ethics" },
  { id: 43, tag: "robotics" },
  { id: 44, tag: "cybersecurity" },
  { id: 45, tag: "gameDesign" },
  { id: 46, tag: "webDevelopment" },
  { id: 47, tag: "mobileAppDevelopment" },
  { id: 48, tag: "networking" },
  { id: 49, tag: "artificialIntelligence" },
  { id: 50, tag: "machineLearning" },
  { id: 51, tag: "virtualReality" },
  { id: 52, tag: "augmentedReality" },
  { id: 53, tag: "blockchain" },
  { id: 54, tag: "cryptocurrency" },
  { id: 55, tag: "bioinformatics" },
  { id: 56, tag: "nanotechnology" },
  { id: 57, tag: "quantumComputing" },
  { id: 58, tag: "biochemistry" },
  { id: 59, tag: "pharmacology" },
  { id: 60, tag: "genetics" },
  { id: 61, tag: "neuroscience" },
  { id: 62, tag: "biomedicalEngineering" },
  { id: 63, tag: "publicHealth" },
  { id: 64, tag: "epidemiology" },
  { id: 65, tag: "nursing" },
  { id: 66, tag: "dentistry" },
  { id: 67, tag: "pharmacy" },
  { id: 68, tag: "physicalTherapy" },
  { id: 69, tag: "occupationalTherapy" },
  { id: 70, tag: "veterinaryMedicine" },
  { id: 71, tag: "agriculturalScience" },
  { id: 72, tag: "foodScience" },
  { id: 73, tag: "forensicScience" },
  { id: 74, tag: "wildlifeBiology" },
  { id: 75, tag: "marineBiology" },
  { id: 76, tag: "ecology" },
  { id: 77, tag: "conservationBiology" },
  { id: 78, tag: "zoology" },
  { id: 79, tag: "botany" },
  { id: 80, tag: "microbiology" },
  { id: 81, tag: "immunology" },
  { id: 82, tag: "alliedHealth" },
  { id: 83, tag: "kinesiology" },
  { id: 84, tag: "exerciseScience" },
  { id: 85, tag: "sportsMedicine" },
];

const Tags = () => {
  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleItemCount, setVisibleItemCount] = useState(6);

  useEffect(() => {
    const updateVisibleItems = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = 100;
      const newVisibleItemCount = Math.floor(containerWidth / itemWidth);
      setVisibleItemCount(newVisibleItemCount);
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  const handlePrev = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex === 0
        ? studyTags.length - visibleItemCount
        : prevStartIndex - 1,
    );
  };

  const handleNext = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex === studyTags.length - visibleItemCount
        ? 0
        : prevStartIndex + 1,
    );
  };

  const visibleItems = studyTags.slice(
    startIndex,
    startIndex + visibleItemCount,
  );

  return (
    <div className="flex items-center justify-center">
      <div className="fixed top-16 z-50 w-[750px]  rounded bg-[#0E6C14]">
        <div
          className="relative overflow-hidden rounded p-4"
          ref={containerRef}
        >
          <button
            className="absolute -left-1 mt-3 -translate-y-1/2 transform rounded bg-[#194b1c] px-2 py-1 text-white"
            onClick={handlePrev}
          >
            &laquo;
          </button>
          <button
            className="absolute -right-2 ml-5 mt-3 -translate-y-1/2 transform rounded bg-[#194b1c] px-2 py-1 text-white"
            onClick={handleNext}
          >
            &raquo;
          </button>

          <div className="mx-2 flex">
            {visibleItems.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={`/classes/${item.tag}`}
                  className="mx-1 rounded bg-[#37833c] p-2  text-white"
                >
                  {item.tag}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
