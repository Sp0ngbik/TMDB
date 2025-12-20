export const buildImageURL = (
  posterUrl: string | null,
  size: string = "original",
) => {
  if (!posterUrl) return "";
  const cleanWay = posterUrl.startsWith("/") ? posterUrl : `/${posterUrl}`;
  return `https://image.tmdb.org/t/p/${size}/${cleanWay}`;
};
