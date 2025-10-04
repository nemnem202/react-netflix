import Rating from "./rating";
import "../styles/partials/movie_card.css";
import type { Serie } from "../../types/serie";
import { ApiRequests } from "../../lib/api_request_methods";
import { useNavigate } from "react-router-dom";

export default function SerieCard({ serie }: { serie: Serie }) {
  const nav = useNavigate();
  return (
    <div className="card-container" onClick={() => nav("/serie/" + serie.id)}>
      <img
        src={ApiRequests.get_serie_img_url_from_path(serie.poster_path)}
        alt=""
        className="card-img"
      />
      <div className="card-content">
        <p className="title">{serie.name}</p>
        <div>
          <p className="description">{serie.overview}</p>
          <p className="date">{serie.last_air_date}</p>
        </div>

        <Rating rate={serie.vote_average} size={1} />
      </div>
    </div>
  );
}
