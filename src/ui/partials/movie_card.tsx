import Rating from "./rating";
import "../styles/partials/movie_card.css";

export default function MovieCard() {
  return (
    <div className="card-container">
      <img src="" alt="" className="card-img" />
      <div className="card-content">
        <h1>Stranformers</h1>
        <Rating rate={25.6} size={1} />
      </div>
    </div>
  );
}
