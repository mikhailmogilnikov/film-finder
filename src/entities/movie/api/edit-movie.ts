import { apiInstance } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/api";
import { Movie } from "~/entities/movie";

export type EditMovieData = Partial<
  Omit<Movie, "id" | "image_url" | "genre">
> & {
  genre: string;
  image?: File;
  image_url?: string;
};

export const editMovie = async (id: string, movieData: EditMovieData) => {
  const response = await apiInstance.patch<{ movie: Movie }>(
    `${API_ENDPOINTS.MOVIES}/${id}`,
    movieData
  );

  return response.data;
};
