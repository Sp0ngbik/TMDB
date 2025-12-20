import { TopFilmCategory, WelcomeSection } from "@/components";
import {
  Categories,
  CategoriesTitle,
  randomImageURL,
  routes,
} from "@/common/variables";
import { useGetFilmByCategoryQuery } from "@/features/api";
import defaultCover from "@/assets/img/coverFilm.webp";
import s from "./Main.module.scss";

const Main = () => {
  const page = "1";
  const { data } = useGetFilmByCategoryQuery({
    category: Categories.popular,
    page,
  });
  const { data: topRatedData } = useGetFilmByCategoryQuery({
    category: Categories.topRated,
    page,
  });
  const { data: upcomingMoviesData } = useGetFilmByCategoryQuery({
    category: Categories.upcoming,
    page,
  });
  const { data: nowPlayingMoviesData } = useGetFilmByCategoryQuery({
    category: Categories.nowPlaying,
    page,
  });
  const posterUrl = randomImageURL(data?.results);
  const src = posterUrl || defaultCover;
  const popularMovieSelection = data?.results?.slice(0, 6);
  const topRated = topRatedData?.results?.slice(0, 6);
  const upcomingMovies = upcomingMoviesData?.results?.slice(0, 6);
  const nowPlayingMovies = nowPlayingMoviesData?.results?.slice(0, 6);
  return (
    <div>
      <WelcomeSection src={src} />
      <div className={s.filmCategories}>
        <TopFilmCategory
          movieSelection={popularMovieSelection}
          viewMoreLink={routes.category + Categories.popular}
          title={CategoriesTitle.popular}
          separator={true}
        />
        <TopFilmCategory
          movieSelection={topRated}
          viewMoreLink={routes.category + Categories.topRated}
          title={CategoriesTitle.topRated}
          separator={true}
        />
        <TopFilmCategory
          movieSelection={upcomingMovies}
          viewMoreLink={routes.category + Categories.upcoming}
          title={CategoriesTitle.upcoming}
          separator={true}
        />
        <TopFilmCategory
          movieSelection={nowPlayingMovies}
          viewMoreLink={routes.category + Categories.nowPlaying}
          title={CategoriesTitle.nowPlaying}
        />
      </div>
    </div>
  );
};

export default Main;
