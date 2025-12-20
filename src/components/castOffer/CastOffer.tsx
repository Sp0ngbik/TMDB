import { TopFilmCategory } from "@/components";
import { buildImageURL } from "@/common/variables";
import s from "./CastOffer.module.scss";
import {
  useGetFilmCastByIdQuery,
  useGetSimilarMovieByIdQuery,
} from "@/features/api";
import defaultAvatar from "@/assets/img/defaultAvatar.webp";
import CastSkeleton from "./ux/CastSkeleton.tsx";

const CastOffer = ({ movieId }: { movieId: string }) => {
  const elemsOnPage = 6;
  const { data: dataCast, isFetching: castIsFetching } =
    useGetFilmCastByIdQuery(movieId);
  const { data: similarMovies, isFetching } =
    useGetSimilarMovieByIdQuery(movieId);
  const slicedSimilarMovies =
    similarMovies?.results && similarMovies.results.slice(0, elemsOnPage);
  const slicedCast = dataCast?.cast.slice(0, elemsOnPage);
  return (
    <div>
      <div className={s.castBlock}>
        <span>Cast</span>
        <div className={s.castActors}>
          {!castIsFetching ? (
            slicedCast?.map(({ name, id, profile_path, character }) => (
              <div key={id} className={s.actor}>
                <img
                  src={buildImageURL(profile_path) || defaultAvatar}
                  alt={`${id} poster not found`}
                />
                <p>{name}</p>
                <span>{character}</span>
              </div>
            ))
          ) : (
            <CastSkeleton count={elemsOnPage} />
          )}
        </div>
      </div>
      {similarMovies?.results && similarMovies?.results.length > 0 && (
        <div className={s.similarMovies}>
          <span>Similar movies</span>
          <div className={s.movies}>
            <TopFilmCategory
              movieSelection={slicedSimilarMovies}
              skeletonCount={elemsOnPage}
              isFetching={isFetching}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CastOffer;
