import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 650 ? setWindowWidth(true) : setWindowWidth(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return windowWidth;
};

export default useWindowWidth;
