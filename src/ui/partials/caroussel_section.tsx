import Caroussel from "./caroussel";
import "../styles/partials/caroussel_section.css";
import { useMobile } from "../../hooks/useMobile";
import MobileCaroussel from "./mobile_caroussel";
import type { Query } from "../../types/query";

export default function CarousselSection({
  type = "movie",
  heading,
  query = {},
}: {
  type: "movie" | "serie";
  heading: string;
  query?: Query;
}) {
  const { isMobile } = useMobile();
  return (
    <section className="caroussel-section">
      <h2>{heading}</h2>
      {isMobile ? <MobileCaroussel type={type} /> : <Caroussel type={type} query={query} />}
    </section>
  );
}
