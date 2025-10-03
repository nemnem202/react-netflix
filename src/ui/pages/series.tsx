import CarousselSection from "../partials/caroussel_section";
import "../styles/pages/series.css";

export default function SeriesPage() {
  return (
    <div className="series-container">
      <h1 className="title">Series</h1>
      <CarousselSection />
      <CarousselSection />
      <CarousselSection />
      <CarousselSection />
    </div>
  );
}
