import { useState, useEffect } from "react";

export const Loading = () => {
  const [animation, setAnimation] = useState("Loading");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimation((prevAnimation) => {
        if (prevAnimation === "Loading...") {
          return "Loading";
        } else {
          return prevAnimation + ".";
        }
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-3xl text-white font-semibold justify-start text-start">{animation}</div>
  );
};
