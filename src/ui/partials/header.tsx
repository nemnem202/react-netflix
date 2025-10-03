import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./navbar";
import Logo from "./logo";
import "../styles/partials/header.css";

export default function Header() {
  const location = useLocation();
  const [current_page, set_current_page] = useState<string>("");

  useEffect(() => {
    set_current_page(location.pathname);
  }, [location, current_page]);

  return (
    <header>
      <Logo />
      <NavBar page={current_page} />
    </header>
  );
}
