import type { FavoriteMovie } from "@/features/api";
import { useState } from "react";
import { FilmCard } from "@/components";
import s from "./Favorites.module.scss";

const Favorites = () => {
  const favorites = localStorage.getItem("favorites");
  const favoritesObj: FavoriteMovie = favorites ? JSON.parse(favorites) : {};
  const [favoritesArray, setFavoritesArray] = useState<FavoriteMovie[string][]>(
    Object.values(favoritesObj),
  );
  const handleRemove = (id: number) => {
    delete favoritesObj[id];
    localStorage.setItem("favorites", JSON.stringify(favoritesObj));
    setFavoritesArray(Object.values(favoritesObj));
  };

  return (
    <section className={s.favoriteSection}>
      <h3>Favorites</h3>
      {Object.values(favoritesArray).length > 0 ? (
        <div className={s.favoriteBlock}>
          {Object.values(favoritesArray).map((card) => (
            <FilmCard {...card} key={card.id} onFavoriteParent={handleRemove} />
          ))}
        </div>
      ) : (
        <div>No favorites movie :c</div>
      )}
    </section>
  );
};

export default Favorites;
