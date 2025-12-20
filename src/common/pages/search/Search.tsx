import { useSearchParams } from "react-router-dom";
import { useGetSearchFilmQuery } from "@/features/api";
import s from "./Search.module.scss";
import {
  FilmCard,
  FilmCardSkeleton,
  Pagination,
  SearchForm,
} from "@/components";
import { placeholderForSearch } from "@/common/variables";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const searchParam = params.get("q");
  const pageParam = params.get("page");
  const { data, isFetching } = useGetSearchFilmQuery(
    {
      searchValue: searchParam || "",
      page: pageParam || "1",
    },
    { skip: !searchParam },
  );
  const onCancelClick = () => {
    setParams({});
  };

  let content;
  if (!searchParam) {
    content = (
      <div className={s.infoText}>Enter a movie title to start searching!</div>
    );
  } else if (data?.results && !data?.results.length && !isFetching) {
    content = (
      <div className={s.infoText}>No matches found for: {searchParam}</div>
    );
  } else {
    content = (
      <div>
        {!isFetching ? (
          <div className={s.filmCards}>
            {data?.results &&
              data?.results.map((item) => <FilmCard {...item} key={item.id} />)}
            <Pagination totalPages={data?.total_pages} siblingsCount={2} />
          </div>
        ) : (
          <FilmCardSkeleton count={18} />
        )}
      </div>
    );
  }
  return (
    <div className={s.searchSection}>
      <div className={s.searchBlock}>
        <h3>Search results</h3>
        <SearchForm
          fullWidth={true}
          className={s.searchContainer}
          placeholder={placeholderForSearch}
          onValueChange={(value) => {
            if (!value) {
              onCancelClick();
            }
          }}
        />
        {searchParam && (
          <span className={s.searchResult}>Results for: {searchParam}</span>
        )}
      </div>
      {content}
    </div>
  );
};

export default Search;
