import s from "./FavoriteHeart.module.scss";
import { Heart } from "@/assets";
import clsx from "clsx";
import { useState } from "react";
import type { FilmCardProps } from "@/components/filmCard/FilmCard.tsx";

const FavoriteHeart = ({
  id,
  onFavoriteParent,
  title = "No title",
  poster_path,
  vote_average = 0,
}: FilmCardProps) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") ?? "{}");
  const [isInFavorite, setIsInFavorite] = useState(!!favorites[id]);
  const toggleFavorite = () => {
    const favoritesLocal = JSON.parse(
      localStorage.getItem("favorites") ?? "{}",
    );
    if (favoritesLocal[id]) {
      delete favoritesLocal[id];
      setIsInFavorite(false);
      onFavoriteParent?.(id);
    } else {
      favoritesLocal[id] = { title, id, poster_path, vote_average };
      setIsInFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesLocal));
  };
  const heartVariant = clsx(s.heartStyle, isInFavorite ? s.inFavorite : "");
  return (
    <div className={s.favoriteBlock} onClick={toggleFavorite}>
      <Heart className={heartVariant} />
    </div>
  );
};

export default FavoriteHeart;
