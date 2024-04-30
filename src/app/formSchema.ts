import { z } from "zod";

export const schema = z.object({
  Excercise: z.string().trim().min(1, {
    message: "Excercise cant be empty",
  }),
});
