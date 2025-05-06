import { z } from "zod";

export const MovieDataFormSchema = z.object({
  title: z.string().min(1, "Название фильма обязательно"),
  genre: z.string().min(1, "Жанр фильма обязателен"),
  duration_minutes: z
    .string()
    .min(1, "Длительность фильма обязательна")
    .refine((value) => !isNaN(Number(value)), "Длительность должна быть числом")
    .transform((value) => Number(value))
    .refine((value) => value > 0, "Длительность должна быть больше 0")
    .refine((value) => value < 500, "Длительность должна быть меньше 500")
    .transform((value) => value.toString()),
  description: z.string().min(1, "Описание фильма обязательно"),
  image: z.instanceof(File).optional(),
  image_url: z.string().optional(),
});

export type MovieDataForm = z.infer<typeof MovieDataFormSchema>;

export const MovieDataFormDefaultValues = {
  title: "",
  genre: "",
  duration_minutes: "",
  description: "",
  image_url: undefined,
  image: undefined,
};
