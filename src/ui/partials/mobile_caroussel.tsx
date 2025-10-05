import MovieCard from "./movie_card";
import "../styles/partials/mobile_caroussel.css";
import { ApiRequests } from "../../lib/api_request_methods";
import type { Movie } from "../../types/movie";
import type { Serie } from "../../types/serie";
import { useEffect, useState } from "react";
import SerieCard from "./serie_card";
import type { Query } from "../../types/query";

export default function MobileCaroussel({
  type,
  query = {},
}: {
  type: "movie" | "serie";
  query?: Query;
}) {
  const [mediaArray, setMediaArray] = useState<(Serie | Movie)[]>([]);
  const handleMediaLoad = async (pageIdx: number) => {
    if (type === "movie") {
      const page = await ApiRequests.get().get_a_page_of_movies(pageIdx, query);
      setMediaArray((prev) => [...prev, ...page.results]);
    } else {
      const page = await ApiRequests.get().get_a_page_of_series(pageIdx, query);
      setMediaArray((prev) => [...prev, ...page.results]);
    }
  };

  useEffect(() => {
    handleMediaLoad(1);
  }, []);
  return (
    <div className="mobile-caroussel">
      {mediaArray &&
        mediaArray.map((e, index) =>
          "title" in e ? (
            <MovieCard key={index} movie={e as Movie} />
          ) : (
            <SerieCard key={index} serie={e as Serie} />
          )
        )}
    </div>
  );
}
