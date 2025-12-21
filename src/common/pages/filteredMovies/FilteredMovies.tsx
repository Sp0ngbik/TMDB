import s from "./FilteredMovies.module.scss";
import {
  AccordionComponent,
  Button,
  Pagination,
  TopFilmCategory,
} from "@/components";
import { useSortValues } from "./hooks/useSortValues.tsx";
import { useGetFilteredFilmsQuery, useGetGenresQuery } from "@/features/api";
import { useSearchParams } from "react-router-dom";

const FilteredMovies = () => {
  const [params] = useSearchParams();
  const currentPage = params.get("page");
  const { data: genresList } = useGetGenresQuery();
  const {
    sortValue,
    selectionItems,
    sliderValues,
    genresState,
    onResetParams,
  } = useSortValues({
    genres: genresList?.genres || [],
  });
  console.log(genresState);
  const { data, isFetching } = useGetFilteredFilmsQuery({
    page: currentPage || "1",
    sort: sortValue || "",
    rating: sliderValues,
    genres: genresState || [],
  });

  return (
    <section className={s.filterSection}>
      <div className={s.filterSelection}>
        <AccordionComponent item={selectionItems}>
          <Button onClick={onResetParams} className={s.resetButton}>
            Reset filters
          </Button>
        </AccordionComponent>
      </div>
      <div className={s.filmBlock}>
        <div>
          <TopFilmCategory
            movieSelection={data?.results}
            skeletonCount={20}
            isFetching={isFetching}
          />
          <Pagination totalPages={data?.total_pages} siblingsCount={2} />
        </div>
      </div>
    </section>
  );
};

export default FilteredMovies;
