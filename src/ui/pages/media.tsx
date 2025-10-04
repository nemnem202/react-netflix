import { useEffect, useState } from "react";
import type { Movie } from "../../types/movie";
import type { Serie } from "../../types/serie";
import { ApiRequests } from "../../lib/api_request_methods";
import { useNavigate, useParams } from "react-router-dom";

export default function MediaPage() {
  const params = useParams<{ media: string; id: string }>();
  const [media, setMedia] = useState<Movie | Serie | null>(null);
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

  useEffect(() => {
    getMedia();
  }, []);

  return (
    media && (
      <div className="media-page">
        {"title" in media ? (
          <>
            <h1>{media.title}</h1>
          </>
        ) : (
          <>
            <h1>{media.name}</h1>
          </>
        )}
      </div>
    )
  );
}
