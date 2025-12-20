import s from "./MovieSkeleton.module.scss";
import Skeleton from "react-loading-skeleton";

const MovieSkeleton = () => {
  return (
    <div className={s.movieSkeletonSection}>
      <div className={s.skeletonDescription}>
        <Skeleton className={s.skeletonPoster} />
        <div className={s.skeletonMovieInfo}>
          <div className={s.skeletonTitleSection}>
            <Skeleton className={s.skeletonTitle} />
            <Skeleton width={70} height={30} />
            <Skeleton className={s.skeletonFavorite} />
          </div>
          <div className={s.infoBlock}>
            <Skeleton width={30} height={24} />
            <span>&nbsp;•&nbsp;</span>
            <Skeleton width={70} height={24} />
            <span>/</span>
            <Skeleton width={35} height={24} />
            <span>/</span>
            <Skeleton width={35} height={24} />
            <span>&nbsp;•&nbsp;</span>
            <Skeleton width={17.5} height={24} />
            <span>h:</span>
            <Skeleton width={35} height={24} />
            <span>m</span>
            <Skeleton
              width={50}
              height={50}
              className={s.ratingSkeleton}
              enableAnimation
            />
          </div>
          <Skeleton className={s.skeletonGenreTitle} />
          <div className={s.skeletonGenres}>
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
          <span>
            <Skeleton className={s.skeletonReviewTitle} />
            <Skeleton className={s.skeletonReviewText} />
          </span>
        </div>
      </div>
      <div className={s.skeletonBackButton}>
        <Skeleton width={80} height={40} />
      </div>
    </div>
  );
};

export default MovieSkeleton;
