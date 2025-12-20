import s from "./TopFilmCategory.module.scss";
import { Button, FilmCard, FilmCardSkeleton } from "@/components";
import type { Movie } from "@/features/api";
import { Link } from "react-router-dom";
import clsx from "clsx";

type Props = {
  title?: string;
  movieSelection?: Movie[];
  viewMoreLink?: string;
  separator?: boolean;
  skeletonCount?: number;
  isFetching?: boolean;
};

const TopFilmCategory = ({
  separator = false,
  movieSelection,
  title,
  isFetching,
  skeletonCount,
  viewMoreLink,
}: Props) => {
  const sectionClass = clsx(s.categorySection, separator && s.separator);
  const isLoading = movieSelection === undefined;

  return (
    <div className={sectionClass}>
      {title && (
        <div className={s.viewBlock}>
          <p>{title}</p>
          {viewMoreLink && (
            <Link to={viewMoreLink}>
              <Button>View More</Button>
            </Link>
          )}
        </div>
      )}
      <div className={s.categoryFilm}>
        {isLoading || isFetching ? (
          <FilmCardSkeleton count={skeletonCount} />
        ) : (
          movieSelection.map((item) => <FilmCard {...item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default TopFilmCategory;
