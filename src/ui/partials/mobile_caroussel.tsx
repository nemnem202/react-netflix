import MovieCard from "./movie_card";
import "../styles/partials/mobile_caroussel.css";

export default function MobileCaroussel() {
  return (
    <div className="mobile-caroussel">
      {Array.from({ length: 20 }).map((_, index) => (
        <MovieCard key={index} />
      ))}
    </div>
  );
}
