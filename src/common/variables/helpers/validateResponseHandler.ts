// import type { ZodType } from "zod";
// import { toast } from "react-toastify";
//
// export const validateResponseHandler =
//   <T>(schema: ZodType<T>) =>
//   (response: unknown): T => {
//     const parseResult = schema.safeParse(response);
//     if (!parseResult.success) {
//       toast.error("TMDB response validation error");
//       throw new Error("Invalid API response");
//     } else {
//       return parseResult.data;
//     }
//   };

import type { ZodType } from "zod";

export const validateResponseHandler = <T>(schema: ZodType<T>) => {
  return (response: unknown): T => {
    const parseResult = schema.safeParse(response);
    if (!parseResult.success) {
      // вызов toast делаем динамически
      import("react-toastify").then(({ toast }) =>
        toast.error("TMDB response validation error"),
      );
      throw new Error("Invalid API response");
    }
    return parseResult.data;
  };
};
