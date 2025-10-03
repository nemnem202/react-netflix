import Caroussel from "./caroussel";
import "../styles/partials/caroussel_section.css";

export default function CarousselSection() {
  return (
    <section className="caroussel-section">
      <h2>Movies</h2>
      <Caroussel />
    </section>
  );
}
