import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLoadingStatus } from "@/features/api";

export const baseApi = createApi({
  reducerPath: "tmdbApi",
  tagTypes: ["MoviesList", "SearchMovie"],
  baseQuery: async (args, api, extraOptions) => {
    api.dispatch(setLoadingStatus(true));
    const result = await fetchBaseQuery({
      baseUrl: "https://api.themoviedb.org/3",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })(args, api, extraOptions);
    // errorHandler(api, result);
    api.dispatch(setLoadingStatus(false));
    return result;
  },

  endpoints: () => ({}),
});
