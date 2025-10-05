import { MovieGenre } from "../../types/genres";
import CarousselSection from "../partials/caroussel_section";
import "../styles/pages/movie.css";

export default function MoviePage() {
  return (
    <main className="movies-container">
      <h1 className="title">Movies</h1>
      <CarousselSection type="movie" heading="Action" query={{ with_genres: MovieGenre.ACTION }} />
      <CarousselSection
        type="movie"
        heading="Adventure"
        query={{ with_genres: MovieGenre.ADVENTURE }}
      />
      <CarousselSection
        type="movie"
        heading="Animation"
        query={{ with_genres: MovieGenre.ANIMATION }}
      />
      <CarousselSection type="movie" heading="Comedy" query={{ with_genres: MovieGenre.COMEDY }} />
      <CarousselSection type="movie" heading="Crime" query={{ with_genres: MovieGenre.CRIME }} />
      <CarousselSection
        type="movie"
        heading="Documentary"
        query={{ with_genres: MovieGenre.DOCUMENTARY }}
      />
      <CarousselSection type="movie" heading="Drama" query={{ with_genres: MovieGenre.DRAMA }} />
      <CarousselSection type="movie" heading="Family" query={{ with_genres: MovieGenre.FAMILY }} />
      <CarousselSection
        type="movie"
        heading="Fantasy"
        query={{ with_genres: MovieGenre.FANTASY }}
      />
      <CarousselSection
        type="movie"
        heading="History"
        query={{ with_genres: MovieGenre.HISTORY }}
      />
      <CarousselSection type="movie" heading="Horror" query={{ with_genres: MovieGenre.HORROR }} />
      <CarousselSection type="movie" heading="Music" query={{ with_genres: MovieGenre.MUSIC }} />
      <CarousselSection
        type="movie"
        heading="Mystery"
        query={{ with_genres: MovieGenre.MYSTERY }}
      />
      <CarousselSection
        type="movie"
        heading="Romance"
        query={{ with_genres: MovieGenre.ROMANCE }}
      />
      <CarousselSection
        type="movie"
        heading="Science Fiction"
        query={{ with_genres: MovieGenre.SCIENCE_FICTION }}
      />
      <CarousselSection
        type="movie"
        heading="TV Movie"
        query={{ with_genres: MovieGenre.TV_MOVIE }}
      />
      <CarousselSection
        type="movie"
        heading="Thriller"
        query={{ with_genres: MovieGenre.THRILLER }}
      />
      <CarousselSection type="movie" heading="War" query={{ with_genres: MovieGenre.WAR }} />
      <CarousselSection
        type="movie"
        heading="Western"
        query={{ with_genres: MovieGenre.WESTERN }}
      />
    </main>
  );
}
