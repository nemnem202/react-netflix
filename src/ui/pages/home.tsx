import { useEffect } from "react";
import { useMobile } from "../../hooks/useMobile";
import Banner from "../partials/banner";
import BannerCaroussel from "../partials/banner_caroussel";
import CarousselSection from "../partials/caroussel_section";
import "../styles/pages/home.css";

export default function HomePage() {
  const { isMobile } = useMobile();

  useEffect(() => {}, [isMobile]);

  return (
    <main className="home-container">
      {isMobile ? <Banner /> : <BannerCaroussel />}
      <CarousselSection type="movie" heading="Movies" />
      <CarousselSection type="serie" heading="TV shows" />
    </main>
  );
}
