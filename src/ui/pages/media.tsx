import { useEffect, useState } from "react";
import type { Movie } from "../../types/movie";
import type { Serie } from "../../types/serie";
import { ApiRequests } from "../../lib/api_request_methods";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../partials/rating";
import "../styles/pages/media.css";
import Spinner from "../partials/spinner";
import type { CastMember } from "../../types/cast_member";

export default function MediaPage() {
  const params = useParams<{ media: string; id: string }>();
  const [media, setMedia] = useState<Movie | Serie | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const navigate = useNavigate();

  const type = params["media"] === "movie" ? "movie" : "serie";
  const id = params.id ? parseInt(params.id) : NaN;

  const getMedia = async () => {
    let media: Movie | Serie | null;
    if (type === "movie") {
      media = await ApiRequests.get().get_movie_from_id(id);
    } else {
      media = await ApiRequests.get().get_serie_from_id(id);
    }
    if (!media) return navigate("not_found");

    setMedia(media);
  };

  const getCast = async () => {
    let cast: CastMember[] | null;
    console.log("[ID] : ", id);
    if (type === "movie") {
      cast = await ApiRequests.get().get_credits_for_movie(id);
    } else {
      cast = await ApiRequests.get().get_credits_for_serie(id);
    }

    setCast(cast);
  };

  useEffect(() => {
    getMedia();
    getCast();
  }, []);

  return (
    <div className="media_page">
      {media ? (
        <>
          <div className="media_header">
            <img
              className="media_poster"
              src={
                type === "movie"
                  ? ApiRequests.get_img_url_from_path((media as Movie).poster_path)
                  : ApiRequests.get_img_url_from_path((media as Serie).poster_path)
              }
              alt={
                type === "movie"
                  ? (media as Movie).title || "poster"
                  : (media as Serie).name || "poster"
              }
            />

            <div className="media_info">
              <h1 className="media_title">
                {type === "movie" ? (media as Movie).title : (media as Serie).name}
              </h1>
              <p className="media_overview">{media.overview}</p>

              {media.genres && (
                <div className="media_genres">
                  <span className="label">Genres:</span>
                  {media.genres.map((g, i) => (
                    <span className="genre_tag" key={i}>
                      {g.name}
                    </span>
                  ))}
                </div>
              )}

              <div className="media_meta">
                {"adult" in media && (media as Movie).adult && (
                  <span className="adult_badge">🔞</span>
                )}
                <span className="origin">{media.origin_country?.join(", ")}</span>
                <span className="status">{media.status}</span>
              </div>

              <div className="media_rating">
                <Rating size={1.5} rate={media.vote_average} />
                <p className="popularity">{media.popularity} people watched it !</p>
              </div>
            </div>
          </div>

          <div className="media_casting">
            <h2>Casting</h2>
            <div className="casting_container">
              {cast.map((e, index) => (
                <div className="casting_img" key={index}>
                  <img src={ApiRequests.get_img_url_from_path(e.profile_path)} alt="" />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Spinner size={100} />
      )}
    </div>
  );
}
