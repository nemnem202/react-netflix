import MovieCard from "./movie_card";
import "../styles/partials/caroussel.css";
import { useEffect, useRef, useState } from "react";
import type { Serie } from "../../types/serie";
import type { Movie } from "../../types/movie";
import { ApiRequests } from "../../lib/api_request_methods";
import SerieCard from "./serie_card";
import type { Query } from "../../types/query";
import Spinner from "./spinner";

export default function Caroussel({
  type = "movie",
  query = {},
}: {
  type: "movie" | "serie";
  query?: Query;
}) {
  const [translationIndex, setTranslation] = useState<number>(0);
  const [naturalTranslation, setNaturalTranslation] = useState<number>(0.6);
  const [mediaArray, setMediaArray] = useState<(Serie | Movie)[]>([]);
  const [carousselPageLength, setCarousselPageLength] = useState(1);
  const translationIntervalRef = useRef<any | null>(null);

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
    handleMediaLoad(carousselPageLength);
  }, [carousselPageLength]);

  useEffect(() => {
    handleNextEnter(0.2);
  }, [mediaArray]);

  const moveNext = () => {
    setNaturalTranslation(Math.floor(naturalTranslation / 13) * 13);
    setTranslation(Math.min(translationIndex + 3, mediaArray.length * carousselPageLength));
    clearTranslationInterval();
  };

  const movePrev = () => {
    setNaturalTranslation(Math.floor(naturalTranslation / 13) * 13);
    setTranslation(Math.max(translationIndex - 3, 0));
    clearTranslationInterval();
  };

  const handleNextEnter = (speed: number = 1) => {
    if (translationIntervalRef.current) {
      clearTranslationInterval();
    }
    translationIntervalRef.current = setInterval(() => {
      setNaturalTranslation((prev) =>
        Math.min(prev + speed, mediaArray.length * 13 * carousselPageLength)
      );
    }, 100);
  };

  const clearTranslationInterval = () => {
    if (translationIntervalRef.current) {
      clearInterval(translationIntervalRef.current);
      translationIntervalRef.current = null;
    }
  };

  const handlePrevEnter = () => {
    if (translationIntervalRef.current) return;

    translationIntervalRef.current = setInterval(() => {
      setNaturalTranslation((prev) => Math.max(prev - 1, 0));
    }, 100);
  };

  useEffect(() => {
    const currentCardTranslation = translationIndex + Math.floor(naturalTranslation / 13);
    const max_size = document.body.getBoundingClientRect().width;
    if (currentCardTranslation * 13 * 16 >= max_size * carousselPageLength) {
      console.log("repeat");
      setCarousselPageLength(carousselPageLength + 1);
    }
  }, [translationIndex, naturalTranslation]);

  return (
    <div
      className="caroussel-arrow-container"
      onMouseEnter={() => clearTranslationInterval()}
      onMouseLeave={() => handleNextEnter(0.2)}
    >
      {(translationIndex > 0 || naturalTranslation > 0.5) && (
        <div className="arrow-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="5rem"
            viewBox="0 -960 960 960"
            onClick={movePrev}
            // onMouseEnter={() => handlePrevEnter()}
            // onMouseLeave={() => handleNextEnter(0.2)}
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </div>
      )}
      <div className="caroussel-container">
        <div
          className="caroussel"
          style={{
            transform: `translateX(${-translationIndex * (12 + 1) - naturalTranslation}rem)`,
          }}
        >
          {mediaArray.length > 0 ? (
            mediaArray.map((e, index) =>
              "title" in e ? (
                <MovieCard key={index} movie={e as Movie} />
              ) : (
                <SerieCard key={index} serie={e as Serie} />
              )
            )
          ) : (
            <Spinner size={80} />
          )}
        </div>
      </div>
      <div className="arrow-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="5rem"
          viewBox="0 -960 960 960"
          onClick={moveNext}
          // onMouseEnter={() => handleNextEnter()}
          // onMouseLeave={() => handleNextEnter(0.2)}
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </div>
    </div>
  );
}
