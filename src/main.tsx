import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./ui/partials/header";
import Footer from "./ui/partials/footer";
import HomePage from "./ui/pages/home";
import MoviePage from "./ui/pages/movies";
import SeriesPage from "./ui/pages/series";
import NotFoundPage from "./ui/pages/not_found";
import PeoplePageDetail from "./ui/pages/people";
import MediaPage from "./ui/pages/media";
import "./ui/styles/global.css";
import { MobileProvider } from "./providers/mobileProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="/people/:id" element={<PeoplePageDetail />} />
          <Route path="/:movie-or-serie/:id" element={<MediaPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </MobileProvider>
  </StrictMode>
);
