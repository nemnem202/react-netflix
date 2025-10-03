import Caroussel from "./caroussel";
import "../styles/partials/caroussel_section.css";
import { useMobile } from "../../hooks/useMobile";
import MobileCaroussel from "./mobile_caroussel";

export default function CarousselSection() {
  const { isMobile } = useMobile();
  return (
    <section className="caroussel-section">
      <h2>Movies</h2>
      {isMobile ? <MobileCaroussel /> : <Caroussel />}
    </section>
  );
}
