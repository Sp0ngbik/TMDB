import z from "zod";

export type T_SearchSchema = z.infer<typeof searchSchema>;
export const searchSchema = z.object({
  searchValue: z
    .string()
    .min(1, "Min search value more then 1 character")
    .max(500, "Max search value 500 characters"),
});
