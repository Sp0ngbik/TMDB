import type { T_MovieAllInfo } from "@/features/api";
import defaultCover from "@/assets/img/coverFilm.webp";
import { buildImageURL } from "@/common/variables";

export const useGetMovieDescription = (movie: T_MovieAllInfo | undefined) => {
  if (!movie) return null;

  const parts: string[] = [];

  if (movie?.origin_country?.[0]) {
    parts.push(movie.origin_country[0]);
  }

  if (movie?.release_date) {
    const date = movie.release_date.split("-").join("/");
    parts.push(date);
  }

  let countryNDate = parts.join(" • ");
  if (countryNDate) {
    countryNDate += " • ";
  }

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;

  const genres = movie.genres.map((genre) => ({
    id: genre.id,
    name: genre.name.toLowerCase(),
  }));

  const firmRelease = movie?.release_date
    ? movie.release_date.split("-")[0]
    : "";
  const rating = movie?.vote_average;
  const tagLine = movie?.tagLine;
  const overview = movie?.overview;
  const backDropPath = buildImageURL(movie.backdrop_path) || defaultCover;
  const posterPath = buildImageURL(movie.poster_path) || defaultCover;
  return {
    genres,
    hours,
    minutes,
    countryNDate,
    firmRelease,
    rating,
    tagLine,
    overview,
    backDropPath,
    id: movie?.id,
    posterPath,
  };
};
