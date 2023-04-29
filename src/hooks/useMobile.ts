import { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  return [isMobile];
};

export default useMobile;
