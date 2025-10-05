import Rating from "./rating";
import "../styles/partials/banner.css";
import { useEffect, useState } from "react";
import type { Movie } from "../../types/movie";
import { ApiRequests } from "../../lib/api_request_methods";
import Spinner from "./spinner";

export default function Banner() {
  const [movie, setMovie] = useState<Movie | null>(null);

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
    <div
      className="banner-container"
      onClick={() => {
        window.location.href = "/movie/" + movie.id;
      }}
    >
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
    <div className="banner-container">
      <Spinner size={100} />
    </div>
  );
}
