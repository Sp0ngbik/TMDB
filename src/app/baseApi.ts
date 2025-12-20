import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorHandler } from "@/common/variables";
import { setLoadingStatus } from "@/features/api";

export const baseApi = createApi({
  reducerPath: "tmdbApi",
  tagTypes: ["MoviesList", "SearchMovie"],
  baseQuery: async (args, api, extraOptions) => {
    // try {
    api.dispatch(setLoadingStatus(true));
    const result = await fetchBaseQuery({
      baseUrl: "https://api.themoviedb.org/3",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })(args, api, extraOptions);
    // errorHandler(api, result);
    return result;
    // } finally {
    //   api.dispatch(setLoadingStatus(false));
    // }
  },
  endpoints: () => ({}),
});
