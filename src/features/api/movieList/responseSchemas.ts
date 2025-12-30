import z from "zod";

export const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  original_title: z.string().optional(),
  original_name: z.string().optional(),
  overview: z.string(),
  backdrop_path: z.string().nullable(),
  poster_path: z.string().nullable(),
  genre_ids: z.array(z.number()).optional(),
  popularity: z.number().optional(),
  vote_average: z.number().optional(),
  vote_count: z.number().optional(),
  release_date: z.string().optional(),
  first_air_date: z.string().optional(),
  origin_country: z.array(z.string()).optional(),
  original_language: z.string(),
});
export const movieListResponseSchema = z.object({
  page: z.number(),
  results: z.array(movieSchema).optional(),
  total_pages: z.number(),
  total_results: z.number(),
});

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const productionCompanySchema = z.object({
  id: z.number().optional(),
  logo_path: z.string().nullable().optional(),
  name: z.string().optional(),
  original_country: z.string().optional(),
});

const productionCountrySchema = z.object({
  iso_3166_1: z.string().optional(),
  name: z.string().optional(),
});

const spokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});
export const movieAllInfo = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  belongs_to_collection: z.object().nullable(),
  budget: z.number(),
  genres: z.array(genreSchema),
  homepage: z.string().nullable(),
  id: z.number(),
  imdb_id: z.string().nullable(),
  original_language: z.string().nullable(),
  original_title: z.string(),
  overview: z.string().nullable(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  production_companies: z.array(productionCompanySchema).optional(),
  production_country: z.array(productionCountrySchema).optional(),
  runtime: z.number(),
  release_date: z.string().optional(),
  revenue: z.number(),
  spoken_languages: z.array(spokenLanguageSchema),
  origin_country: z.array(z.string().nullable()),
  status: z.string(),
  tagLine: z.string().optional(),
  title: z.string(),
  video: z.boolean().optional(),
  vote_average: z.number(),
  vote_count: z.number(),
});
const castSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  know_for_department: z.string().optional(),
  name: z.string(),
  original_name: z.string().nullable(),
  popularity: z.number(),
  profile_path: z.string().nullable(),
  cast: z.number().optional(),
  character: z.string(),
  credit_id: z.string().nullable(),
  order: z.number(),
});
export const castResponseSchema = z.object({
  id: z.number(),
  cast: z.array(castSchema),
});

type MovieWithVideo = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type MovieList = z.infer<typeof movieListResponseSchema>;
export type Genre = z.infer<typeof genreSchema>;
export type CastResponse = z.infer<typeof castResponseSchema>;
export type T_MovieAllInfo = z.infer<typeof movieAllInfo>;
export type Movie = z.infer<typeof movieSchema>;
export type MovieVideo = { id: string; results: MovieWithVideo[] };
