import type { Genre } from "@/features/api/movieList/responseSchemas.ts";

export type MovieCard = {
  id: number;
  vote_average?: number;
  poster_path: string | null;
  title: string;
};

export type Genres = {
  genres: Genre[];
};

export type FavoriteMovie = {
  [id: string]: {
    id: number;
    poster_path: string;
    vote_average: number;
    title: string;
  };
};
