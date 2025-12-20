import type { Movie } from "@/features/api";

export const randomImageURL = (
  resultsPosters?: Movie[],
  size: string = "original",
) => {
  if (!resultsPosters?.length) return "";
  const random = Math.floor(Math.random() * resultsPosters.length);
  const randomPoster = resultsPosters[random].backdrop_path;
  const cleanWay = randomPoster?.startsWith("/")
    ? randomPoster
    : `/${randomPoster}`;
  return `https://image.tmdb.org/t/p/${size}/${cleanWay}`;
};
