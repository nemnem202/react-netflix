import { useMobile } from "../../hooks/useMobile";
import Banner from "../partials/banner";
import BannerCaroussel from "../partials/banner_caroussel";
import CarousselSection from "../partials/caroussel_section";
import "../styles/pages/home.css";

export default function HomePage() {
  const { isMobile } = useMobile();

  return (
    <div className="home-container">
      {isMobile ? <Banner /> : <BannerCaroussel />}
      <CarousselSection />
      <CarousselSection />
    </div>
  );
}
