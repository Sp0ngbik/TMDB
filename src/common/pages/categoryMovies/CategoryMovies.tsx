import s from "./CategoryMovies.module.scss";
import { Button, Pagination, TopFilmCategory } from "@/components";
import {
  NavLink,
  type NavLinkRenderProps,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Categories, CategoriesTitle, routes } from "@/common/variables";
import clsx from "clsx";
import { useGetFilmByCategoryQuery } from "@/features/api";
import { useDebounce } from "@/common/hooks/useDebounce.ts";

const CategoryMovies = () => {
  const [params] = useSearchParams({ page: "1" });
  const currentPage = params.get("page");
  const debouncedPage = useDebounce(currentPage, 700);
  const isLinkActive = ({ isActive }: NavLinkRenderProps) => {
    return isActive ? clsx(s["active"]) : "";
  };
  const { filter } = useParams<{ filter: Categories }>();
  const { data } = useGetFilmByCategoryQuery({
    category: filter || Categories.popular,
    page: debouncedPage || "1",
  });
  return (
    <section className={s.movieCollection}>
      <div className={s.buttonSection}>
        <NavLink
          className={isLinkActive}
          to={routes.category + Categories.popular}
        >
          <Button>Popular</Button>
        </NavLink>
        <NavLink
          className={isLinkActive}
          to={routes.category + Categories.topRated}
        >
          <Button> Top Rated</Button>
        </NavLink>
        <NavLink
          className={isLinkActive}
          to={routes.category + Categories.upcoming}
        >
          <Button>Upcoming</Button>
        </NavLink>
        <NavLink
          className={isLinkActive}
          to={routes.category + Categories.nowPlaying}
        >
          <Button>Now Playing</Button>
        </NavLink>
      </div>
      <div className={s.movieCardSection}>
        <TopFilmCategory
          skeletonCount={20}
          movieSelection={data?.results}
          title={
            CategoriesTitle[filter as keyof typeof CategoriesTitle] ||
            CategoriesTitle.popular
          }
        />
      </div>
      <Pagination totalPages={data?.total_pages} siblingsCount={2} />
    </section>
  );
};

export default CategoryMovies;
