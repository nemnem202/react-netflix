import CarousselSection from "../partials/caroussel_section";
import "../styles/pages/movie.css";

export default function MoviePage() {
  return (
    <div className="movies-container">
      <h1 className="title">Movies</h1>
      <CarousselSection />
      <CarousselSection />
      <CarousselSection />
      <CarousselSection />
    </div>
  );
}
