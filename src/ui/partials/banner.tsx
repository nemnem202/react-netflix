import Rating from "./rating";
import "../styles/partials/banner.css";
import { useEffect, useState } from "react";
import type { Movie } from "../../types/movie";
import { ApiRequests } from "../../lib/api_request_methods";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const nav = useNavigate();

  const getMovie = async () => {
    const movie = await ApiRequests.get().get_random_movie();
    setMovie(movie);
  };

  useEffect(() => {
    if (!movie) {
      getMovie();
    }
  }, [movie]);

  return movie ? (
    <div className="banner-container" onClick={() => nav("/movie/" + movie.id)}>
      <div className="banner-img-container">
        <img src={ApiRequests.get_movie_img_url_from_path(movie.poster_path)} alt="" />
      </div>

      <div className="banner-description-container">
        <div>
          <h1 className="title">{movie.title}</h1> <p className="date">{movie.release_date}</p>
        </div>
        <div>
          <p className="description">{movie.overview}</p>

          <Rating rate={movie.popularity} size={1.5} />
        </div>
      </div>
    </div>
  ) : (
    <div>oeoe</div>
  );
}
