import Rating from "./rating";
import "../styles/partials/movie_card.css";
import type { Movie } from "../../types/movie";
import { ApiRequests } from "../../lib/api_request_methods";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }: { movie: Movie }) {
  const nav = useNavigate();
  return (
    <div className="card-container" onClick={() => nav("/movie/" + movie.id)}>
      <img
        src={ApiRequests.get_movie_img_url_from_path(movie.poster_path)}
        alt=""
        className="card-img"
      />
      <div className="card-content">
        <p className="title">{movie.title}</p>
        <div>
          <p className="description">{movie.overview}</p>
          <p className="date">{movie.release_date}</p>
        </div>

        <Rating rate={movie.vote_average} size={1} />
      </div>
    </div>
  );
}
