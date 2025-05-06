import { apiInstance } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/api";
import { Movie } from "~/entities/movie";

export type EditMovieData = Partial<Omit<Movie, "id">>;

export const editMovie = async (id: string, movieData: EditMovieData) => {
  const response = await apiInstance.patch<{ movie: Movie }>(
    `${API_ENDPOINTS.MOVIES}/${id}`,
    movieData
  );

  return response.data;
}; 