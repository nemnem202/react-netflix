import { SerieGenre } from "../../types/genres";
import CarousselSection from "../partials/caroussel_section";
import "../styles/pages/series.css";

export default function SeriesPage() {
  return (
    <main className="series-container">
      <h1 className="title">Series</h1>
      <CarousselSection type="serie" heading="Crime" query={{ with_genres: SerieGenre.CRIME }} />
      <CarousselSection type="serie" heading="Comedy" query={{ with_genres: SerieGenre.COMEDY }} />
      <CarousselSection type="serie" heading="Drama" query={{ with_genres: SerieGenre.DRAMA }} />
      <CarousselSection
        type="serie"
        heading="Action & Adventure"
        query={{ with_genres: SerieGenre.ACTION_ADVENTURE }}
      />
      <CarousselSection
        type="serie"
        heading="Animation"
        query={{ with_genres: SerieGenre.ANIMATION }}
      />
      <CarousselSection
        type="serie"
        heading="Documentary"
        query={{ with_genres: SerieGenre.DOCUMENTARY }}
      />
      <CarousselSection type="serie" heading="Family" query={{ with_genres: SerieGenre.FAMILY }} />
      <CarousselSection type="serie" heading="Kids" query={{ with_genres: SerieGenre.KIDS }} />
      <CarousselSection
        type="serie"
        heading="Mystery"
        query={{ with_genres: SerieGenre.MYSTERY }}
      />
      <CarousselSection type="serie" heading="News" query={{ with_genres: SerieGenre.NEWS }} />
      <CarousselSection
        type="serie"
        heading="Reality"
        query={{ with_genres: SerieGenre.REALITY }}
      />
      <CarousselSection
        type="serie"
        heading="Sci-Fi & Fantasy"
        query={{ with_genres: SerieGenre.SCI_FI_FANTASY }}
      />
      <CarousselSection type="serie" heading="Soap" query={{ with_genres: SerieGenre.SOAP }} />
      <CarousselSection type="serie" heading="Talk" query={{ with_genres: SerieGenre.TALK }} />
      <CarousselSection
        type="serie"
        heading="War & Politics"
        query={{ with_genres: SerieGenre.WAR_POLITICS }}
      />
      <CarousselSection
        type="serie"
        heading="Western"
        query={{ with_genres: SerieGenre.WESTERN }}
      />
    </main>
  );
}
