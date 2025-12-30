import { baseApi } from "@/app/baseApi.ts";

import type { Genres, MovieVideo } from "@/features/api";
import {
  type CastResponse,
  castResponseSchema,
  movieAllInfo,
  type MovieList,
  movieListResponseSchema,
  type T_MovieAllInfo,
} from "@/features/api";
import { Categories, validateResponseHandler } from "@/common/variables";

export const movieListApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFilmByCategory: build.query<
      MovieList,
      { category: Categories; page?: string }
    >({
      providesTags: ["MoviesList"],
      query: ({ category, page = "1" }) => ({
        url: `movie/${category}?language=en-US&page=${page}`,
      }),
      transformResponse: validateResponseHandler(movieListResponseSchema),
    }),
    getFilmById: build.query<T_MovieAllInfo, string>({
      providesTags: ["SearchMovie"],
      query: (movieId) => ({
        url: `movie/${movieId}?language=en-US&include_video=true`,
      }),
      transformResponse: validateResponseHandler(movieAllInfo),
    }),
    getFilmCastById: build.query<CastResponse, string>({
      providesTags: ["MoviesList"],
      query: (movieId) => ({
        url: `movie/${movieId}/credits`,
      }),
      transformResponse: validateResponseHandler(castResponseSchema),
    }),
    getSimilarMovieById: build.query<MovieList, string>({
      providesTags: ["MoviesList"],
      query: (movieId) => ({
        url: `movie/${movieId}/similar`,
      }),
      transformResponse: validateResponseHandler(movieListResponseSchema),
    }),
    getGenres: build.query<Genres, void>({
      query: () => ({
        url: `genre/movie/list`,
      }),
    }),
    getFilteredFilms: build.query<
      MovieList,
      { page: string; sort: string; rating: number[]; genres: string[] }
    >({
      providesTags: ["MoviesList"],
      query: ({ sort, rating, page, genres }) => ({
        url: `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=${sort}&vote_average.gte=${rating[0]}&vote_average.lte=${rating[1]}&with_genres=${genres}`,
      }),
      transformResponse: validateResponseHandler(movieListResponseSchema),
    }),
    getSearchFilm: build.query<
      MovieList,
      { searchValue: string; page: string }
    >({
      providesTags: ["SearchMovie"],
      query: ({ searchValue, page }) => ({
        url: `search/movie?query=${searchValue}&include_adult=false&language=en-US&page=${page}`,
      }),
      transformResponse: validateResponseHandler(movieListResponseSchema),
    }),
    getMovieVideo: build.query<MovieVideo, string>({
      providesTags: ["MoviesList"],
      query: (movieId) => ({
        url: `movie/${movieId}/videos`,
      }),
    }),
  }),
});

export const {
  useGetSearchFilmQuery,
  useGetMovieVideoQuery,
  useGetGenresQuery,
  useGetFilmByIdQuery,
  useGetFilmByCategoryQuery,
  useGetFilteredFilmsQuery,
  useGetFilmCastByIdQuery,
  useGetSimilarMovieByIdQuery,
} = movieListApi;
