import s from "./CastSkeleton.module.scss";
import Skeleton from "react-loading-skeleton";
type CastSkeletonProps = {
  count: number;
};
const CastSkeleton = ({ count }: CastSkeletonProps) => {
  return (
    <div className={s.castBlock}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={s.castInfo}>
          <Skeleton className={s.actorImageSkeleton} />
          <Skeleton className={s.actorNameSkeleton} />
          <Skeleton className={s.actorCharacter} />
        </div>
      ))}
    </div>
  );
};

export default CastSkeleton;
