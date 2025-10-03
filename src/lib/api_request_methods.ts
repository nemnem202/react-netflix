import type { Movie } from "../types/movie";
import type { Serie } from "../types/serie";

export class ApiRequests {
  private static instance: ApiRequests;
  private static token = import.meta.env.VITE_READONLY_API_TOKEN;
  private static api_url = import.meta.env.VITE_API_URL;
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

  get_movie_from_id = async (id: string): Promise<Movie | null> => {
    const response = await this.fetch_api<Movie>(`/movie/${id}`);

    if (response) {
      return response;
    } else {
      return null;
    }
  };

  search_movie = async (content: string): Promise<Movie[]> => {
    const response = await this.fetch_api<Movie[]>(`/movie/${content}`);

    if (response) {
      return response;
    } else {
      return [];
    }
  };

  get_serie_from_id = async (id: string): Promise<Serie | null> => {
    const response = await this.fetch_api<Serie>(`/tv/${id}`);

    if (response) {
      return response;
    } else {
      return null;
    }
  };

  search_serie = async (content: string): Promise<Serie[]> => {
    const response = await this.fetch_api<Serie[]>(`/movie/${content}`);

    if (response) {
      return response;
    } else {
      return [];
    }
  };

  // get_a_page_of_series = async (page: number): Promise<Serie[]> => {
  //   try {
  //   } catch (err) {
  //     console.error(err);
  //     return [];
  //   }
  // };

  //   get_a_page_of_movies = async (page: number): Promise<Movie[]> => {
  //     try {
  //     } catch (err) {
  //       console.error(err);
  //       return [];
  //     }
  //   };
}
