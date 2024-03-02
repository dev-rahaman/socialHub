import { useEffect } from "react";

const FetchData = ({ endPoint, setData }) => {
  useEffect(() => {
    fetch(`http://localhost:5000/${endPoint}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [endPoint, setData]);
};

export default FetchData;
