import { useEffect, useRef, useState } from "react";
import Banner from "./banner";
import "../styles/partials/banner_caroussel.css";

export default function BannerCaroussel() {
  const [bannerIndex, setBannerIndex] = useState<number>(0);
  const intervalRef = useRef<any | null>(null);

  const startAutoScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % 3);
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <div className="banner-caroussel-container">
      <div
        className="banner-caroussel"
        style={{ transform: `translateX(calc(-800px * ${bannerIndex})) ` }}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Banner key={index} />
        ))}
      </div>
    </div>
  );
}
