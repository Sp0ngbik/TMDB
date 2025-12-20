import s from "./FilmCardSkeleton.module.scss";
import Skeleton from "react-loading-skeleton";

type SkeletonProps = {
  count?: number;
};

const FilmCardSkeleton = ({ count = 6 }: SkeletonProps) => {
  return (
    <div className={s.skeletonContainer}>
      <div className={s.skeletonBody}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={s.skeletonItem}>
            <Skeleton
              className={s.posterStyle}
              baseColor={"var(--color-light-900)"}
              borderRadius={25}
              width={275}
              enableAnimation
            />
            <Skeleton
              className={s.textStyle}
              baseColor={"var(--color-light-900)"}
              width={275}
              height={24}
              borderRadius={25}
              enableAnimation
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmCardSkeleton;
