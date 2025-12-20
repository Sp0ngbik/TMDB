export const routes = {
  main: "/",
  category: "/category/",
  categoryParam: "/category/:filter?",
  filter: "/filter",
  search: "/search/",
  favorites: "/favorites",
  movie: "/movie/:movieId",
  notFound: "/*",
} as const;

export enum Categories {
  popular = "popular",
  topRated = "top_rated",
  upcoming = "upcoming",
  nowPlaying = "now_playing",
}

export const placeholderForSearch = "Find any film by title ...";

export enum CategoriesTitle {
  popular = "Popular Movies",
  topRated = "Top Rated",
  upcoming = "Upcoming",
  nowPlaying = "Now Playing",
}

export enum FilterSelect {
  popularityDesc = "popularity.desc",
  popularityAsc = "popularity.asc",
  voteAverageDesc = "vote_average.desc",
  voteAverageAsc = "vote_average.asc",
  primaryReleaseDateDesc = "primary_release_date.desc",
  primaryReleaseDateAsc = "primary_release_date.asc",
  titleDesc = "title.desc",
  titleAsc = "title.asc",
}
