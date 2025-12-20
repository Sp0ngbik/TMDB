import coverFilm from "@/assets/img/coverFilm.webp";
import s from "./FilmCard.module.scss";
import { useNavigate } from "react-router-dom";
import type { MovieCard } from "@/features/api/movieList/types.ts";
import { buildImageURL } from "@/common/variables";
import { CircleRating, FavoriteHeart } from "@/components";

export type FilmCardProps = {
  onFavoriteParent?: (id: number) => void;
} & MovieCard;

const FilmCard = (props: FilmCardProps) => {
  const { id, title, poster_path, vote_average } = props;
  const navigate = useNavigate();
  const onFilmCardClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={s.cardBody}>
      <div>
        <div className={s.imageBlock} onClick={onFilmCardClick}>
          <img
            src={poster_path ? buildImageURL(poster_path) : coverFilm}
            alt="item not found"
          />
        </div>
      </div>
      <div className={s.circleRating}>
        <CircleRating rating={vote_average} />
      </div>
      <div className={s.favoriteWrapper}>
        <FavoriteHeart {...props} />
      </div>
      <div className={s.cardDescription}>
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default FilmCard;
