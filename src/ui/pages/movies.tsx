import CarousselSection from "../partials/caroussel_section";
import "../styles/pages/movie.css";

export default function MoviePage() {
  return (
    <main className="movies-container">
      <h1 className="title">Movies</h1>
      <CarousselSection type="movie" heading="Movies" />
      <CarousselSection type="movie" heading="Movies" />
      <CarousselSection type="movie" heading="Movies" />
    </main>
  );
}
