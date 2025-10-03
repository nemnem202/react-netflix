import { useEffect } from "react";
import "../styles/partials/navbar.css";

export default function NavBar({ page }: { page: string }) {
  useEffect(() => {
    console.log("page changed" + page);
  }, [page]);
  return (
    <nav>
      <a href="/" className={page === "/" ? "selected" : ""}>
        Home
      </a>
      <a href="/movies" className={page === "/movies" ? "selected" : ""}>
        Movies
      </a>
      <a href="/series" className={page === "/series" ? "selected" : ""}>
        Series
      </a>
    </nav>
  );
}
