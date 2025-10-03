import BannerCaroussel from "../partials/banner_caroussel";
import CarousselSection from "../partials/caroussel_section";
import "../styles/pages/home.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <BannerCaroussel />
      <CarousselSection />
      <CarousselSection />
    </div>
  );
}
