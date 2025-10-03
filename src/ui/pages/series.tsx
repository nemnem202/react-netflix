import CarousselSection from "../partials/caroussel_section";
import "../styles/pages/series.css";

export default function SeriesPage() {
  return (
    <main className="series-container">
      <h1 className="title">Series</h1>
      <CarousselSection type="serie" heading="Serie" />
      <CarousselSection type="serie" heading="Serie" />
      <CarousselSection type="serie" heading="Serie" />
    </main>
  );
}
