import "../styles/partials/footer.css";

export default function Footer() {
  return (
    <footer className="app_footer">
      <div className="footer_bottom">
        <p>© {new Date().getFullYear()} MyMovieApp. Tous droits réservés.</p>
        <p>
          <a href="/mentions-legales">Mentions légales</a> |{" "}
          <a href="/confidentialite">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}
