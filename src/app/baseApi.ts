import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorHandler, loaderHelpers } from "@/common/variables";

export const baseApi = createApi({
  reducerPath: "tmdbApi",
  tagTypes: ["MoviesList", "SearchMovie"],
  baseQuery: async (args, api, extraOptions) => {
    loaderHelpers(api, true);
    const result = await fetchBaseQuery({
      baseUrl: "https://api.themoviedb.org/3",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })(args, api, extraOptions);
    errorHandler(api, result);
    loaderHelpers(api, false);
    return result;
  },

  endpoints: () => ({}),
});
