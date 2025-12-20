import { useId, useState } from "react";
import { Button, SelectComponent, SliderComponent } from "@/components";
import { useSearchParams } from "react-router-dom";
import { FilterSelect } from "@/common/variables";
import s from "../FilteredMovies.module.scss";
import clsx from "clsx";
import { useDebounce } from "@/common/hooks/useDebounce.ts";
import type { Genre } from "@/features/api";

type SortValuesProps = {
  genres: Genre[];
};

export const useSortValues = ({ genres }: SortValuesProps) => {
  const sortValues = [
    {
      value: FilterSelect.popularityDesc,
      title: "Popularity ↓",
      id: useId(),
    },
    {
      value: FilterSelect.popularityAsc,
      title: "Popularity ↑",
      id: useId(),
    },
    {
      value: FilterSelect.voteAverageDesc,
      title: "Rating ↓",
      id: useId(),
    },
    {
      value: FilterSelect.voteAverageAsc,
      title: "Rating ↑",
      id: useId(),
    },
    {
      value: FilterSelect.primaryReleaseDateDesc,
      title: "Release Date ↓",
      id: useId(),
    },
    {
      value: FilterSelect.primaryReleaseDateAsc,
      title: "Release Date ↑",
      id: useId(),
    },
    {
      value: FilterSelect.titleDesc,
      title: "Title A-Z",
      id: useId(),
    },
    {
      value: FilterSelect.titleAsc,
      title: "Title Z-A",
      id: useId(),
    },
  ];
  const [params, setParams] = useSearchParams();
  const genreParams = params.get("with_genres")?.split(",");
  const [genresState, setGenresState] = useState<string[]>(genreParams || []);
  const debounceGenres = useDebounce(genresState, 700);
  const sortValue = params.get("sort_by");
  const minValue = Number(params.get(FilterSelect.voteAverageDesc)) || 0;
  const maxValue = Number(params.get(FilterSelect.voteAverageAsc)) || 10;
  const sliderValues = [minValue, maxValue];
  const sliderConfig = {
    step: 0.1,
    max: 10,
    defaultValue: sliderValues,
  };

  const onResetParams = () => {
    setParams({});
    setGenresState([]);
  };
  const onSelectGenre = (id: number) => {
    const idString = id.toString();
    if (genresState.includes(idString)) {
      const newGenreState = genresState.filter(
        (genreId) => genreId !== idString,
      );
      setGenresState(newGenreState);
      setParams((prev) => {
        prev.set("with_genres", newGenreState.toString());
        prev.set("page", "1");
        return prev;
      });
    } else {
      setGenresState((prev) => [...prev, idString]);
      setParams((prev) => {
        prev.set("with_genres", [genresState, id].toString());
        prev.set("page", "1");
        return prev;
      });
    }
  };

  const activeGenre = (genre: Genre) =>
    clsx(genresState.includes(genre.id.toString()) && s.activeGenre);

  const selectionItems = [
    {
      triggerTitle: "Sort",
      content: (
        <div>
          Sort by
          <SelectComponent
            selectTitle={"Chose filter"}
            selectItems={sortValues}
          />
          <SliderComponent sliderConfig={sliderConfig} />
        </div>
      ),
      id: useId(),
    },
    {
      triggerTitle: "Filter categories",
      content: (
        <div className={s.filterCategories}>
          {genres.map((item) => (
            <Button
              className={activeGenre(item)}
              onClick={() => {
                onSelectGenre(item.id);
              }}
              variant={"secondary"}
              key={item.id}
            >
              {item.name}
            </Button>
          ))}
        </div>
      ),
      id: useId(),
    },
  ];
  return {
    selectionItems,
    sortValue,
    sliderValues,
    genresState: debounceGenres,
    onResetParams,
  };
};
