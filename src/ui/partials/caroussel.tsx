import MovieCard from "./movie_card";
import "../styles/partials/caroussel.css";
import { useEffect, useRef, useState } from "react";
export default function Caroussel() {
  const [translationIndex, setTranslation] = useState<number>(0);
  const [naturalTranslation, setNaturalTranslation] = useState<number>(0);
  const [arrayLength, setArrayLength] = useState<number>(20);
  const [carousselRepeats, setCarousselRepeats] = useState<number>(1);
  const translationIntervalRef = useRef<any | null>(null);

  const moveNext = () => {
    setNaturalTranslation(Math.floor(naturalTranslation / 13) * 13);
    setTranslation(Math.min(translationIndex + 1, arrayLength * carousselRepeats));
    clearTranslationInterval();
  };

  const movePrev = () => {
    setNaturalTranslation(Math.floor(naturalTranslation / 13) * 13);
    setTranslation(Math.max(translationIndex - 1, 0));
    clearTranslationInterval();
  };

  const handleNextEnter = () => {
    if (translationIntervalRef.current) return;

    translationIntervalRef.current = setInterval(() => {
      setNaturalTranslation((prev) => Math.min(prev + 1, arrayLength * 13 * carousselRepeats));
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
    if (currentCardTranslation * 13 * 16 >= max_size * carousselRepeats) {
      console.log("repeat");
      setCarousselRepeats(carousselRepeats + 1);
    }
    if (currentCardTranslation * 13 * 16 < max_size) {
      setCarousselRepeats(1);
    }
  }, [translationIndex, naturalTranslation]);

  return (
    <div className="caroussel-arrow-container">
      {(translationIndex > 0 || naturalTranslation > 0) && (
        <div className="arrow-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="5rem"
            viewBox="0 -960 960 960"
            onClick={movePrev}
            onMouseEnter={handlePrevEnter}
            onMouseLeave={clearTranslationInterval}
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
          {Array.from({ length: arrayLength * carousselRepeats }).map((_, index) => (
            <MovieCard key={index} />
          ))}
        </div>
      </div>
      <div className="arrow-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="5rem"
          viewBox="0 -960 960 960"
          onClick={moveNext}
          onMouseEnter={handleNextEnter}
          onMouseLeave={clearTranslationInterval}
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </div>
    </div>
  );
}
