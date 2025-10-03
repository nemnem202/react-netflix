import "../styles/partials/navbar.css";

export default function NavBar({ page }: { page: string }) {
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
