import { Genre } from "~/entities/genre";

export interface Movie {
  id: string;
  title: string;
  description: string;
  image_url: string;
  duration_minutes: number;
  genres: Genre[];
}
