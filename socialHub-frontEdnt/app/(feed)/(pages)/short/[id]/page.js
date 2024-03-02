"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Short from "../component";

const shorts = [
  { id: "1", views: "1 M", like: "1k", message: "853", shear: "853" },
  { id: "2", views: "2 M", like: "1k", message: "853", shear: "853" },
  { id: "3", views: "3 M", like: "1k", message: "853", shear: "853" },
  { id: "4", views: "4 M", like: "1k", message: "853", shear: "853" },
  { id: "5", views: "5 M", like: "1k", message: "853", shear: "853" },
  { id: "6", views: "6 M", like: "1k", message: "853", shear: "853" },
];

const ShortWithID = () => {
  const router = useRouter();

  useEffect(() => {
    const handleVisibilityChange = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const shortId = entry.target.id.replace("short-", "");
          console.log(`Short ${shortId} is now visible`);

          // Check if the route needs to be updated
          const currentPath = router.asPath;
          const newPath = `/(feed)/short/${shortId}`;

          if (currentPath !== newPath) {
            router.push(newPath, undefined, { shallow: true });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibilityChange, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    document.querySelectorAll(".shortCls").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [router]);

  return (
    <div>
      {shorts.map((short) => (
        <Short key={short.id} {...short} />
      ))}
    </div>
  );
};

export default ShortWithID;
