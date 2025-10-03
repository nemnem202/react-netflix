import Caroussel from "./caroussel";
import "../styles/partials/caroussel_section.css";
import { useMobile } from "../../hooks/useMobile";
import MobileCaroussel from "./mobile_caroussel";

export default function CarousselSection({
  type = "movie",
  heading,
}: {
  type: "movie" | "serie";
  heading: string;
}) {
  const { isMobile } = useMobile();
  return (
    <section className="caroussel-section">
      <h2>{heading}</h2>
      {isMobile ? <MobileCaroussel /> : <Caroussel type={type} />}
    </section>
  );
}
