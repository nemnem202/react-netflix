import type { Movie } from "../types/movie";
import type { Paginated } from "../types/page";
import type { Serie } from "../types/serie";

export class ApiRequests {
  private static instance: ApiRequests;
  private static token = import.meta.env.VITE_READONLY_API_TOKEN;
  private static api_url = import.meta.env.VITE_API_URL;

  private movies: Set<Movie> = new Set();
  private series: Set<Serie> = new Set();
  private constructor() {}

  public static get(): ApiRequests {
    if (!this.instance) {
      this.instance = new ApiRequests();
    }
    if (!this.token || !this.api_url) {
      console.error("[API] : environnement variables are undefined");
    }
    return this.instance;
  }

  private fetch_api = async <T>(route: string): Promise<T | null> => {
    try {
      const res = await fetch(`${ApiRequests.api_url}/${route}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ApiRequests.token}`,
        },
      });
      if (!res.ok) {
        console.error(`Erreur API: ${res.status}`);
        return null;
      }

      const data = (await res.json()) as T;

      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  get_movie_from_id = async (id: number): Promise<Movie | null> => {
    const local = this.get_local_memory_movie(id);

    if (local) return local;

    const response = await this.fetch_api<Movie>(`/movie/${id}`);

    if (response) {
      this.movies.add(response);
      return response;
    } else {
      return null;
    }
  };

  get_random_movie = async (): Promise<Movie | null> => {
    const page = await ApiRequests.get().get_a_page_of_movies(1);

    const results = page.results;
    const random_movie_idx = Math.floor(Math.random() * results.length);
    return results[random_movie_idx];
  };

  search_movie = async (content: string): Promise<Movie[]> => {
    const response = await this.fetch_api<Movie[]>(`/movie/${content}`);

    if (response) {
      response.forEach((e) => this.movies.add(e));
      return response;
    } else {
      return [];
    }
  };

  get_serie_from_id = async (id: number): Promise<Serie | null> => {
    const local = this.get_local_memory_serie(id);

    if (local) return local;

    const response = await this.fetch_api<Serie>(`/tv/${id}`);

    if (response) {
      this.series.add(response);
      return response;
    } else {
      return null;
    }
  };

  search_serie = async (content: string): Promise<Serie[]> => {
    const response = await this.fetch_api<Serie[]>(`/movie/${content}`);

    if (response) {
      response.forEach((e) => this.series.add(e));
      return response;
    } else {
      return [];
    }
  };

  get_a_page_of_series = async (page: number): Promise<Paginated<Serie>> => {
    const response = await this.fetch_api<Paginated<Serie>>(
      `/discover/tv?&sort_by=popularity.desc&page=${page}`
    );

    if (response) {
      response.results.forEach((e) => this.series.add(e));
      return response;
    } else {
      return {
        page: page,
        results: [],
        total_pages: 0,
        total_results: 0,
      };
    }
  };

  get_a_page_of_movies = async (page: number): Promise<Paginated<Movie>> => {
    const response = await this.fetch_api<Paginated<Movie>>(
      `/discover/movie?&sort_by=popularity.desc&page=${page}`
    );

    if (response) {
      response.results.forEach((e) => this.movies.add(e));
      return response;
    } else {
      return {
        page: page,
        results: [],
        total_pages: 0,
        total_results: 0,
      };
    }
  };

  static get_movie_img_url_from_path = (path: string | null): string => {
    return `https://image.tmdb.org/t/p/w342${path}`;
  };

  static get_serie_img_url_from_path = (path: string | null): string => {
    return `https://image.tmdb.org/t/p/w342${path}`;
  };

  private get_local_memory_movie = (id: number): Movie | undefined => {
    const local = Array.from(this.movies).find((e) => e.id === id);
    if (local) console.log("local !");
    return local;
  };

  private get_local_memory_serie = (id: number): Serie | undefined => {
    const local = Array.from(this.series).find((e) => e.id === id);
    if (local) console.log("local !");
    return local;
  };
}
