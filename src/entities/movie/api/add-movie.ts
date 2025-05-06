import { apiInstance } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/api";
import { Movie } from "~/entities/movie";

export type AddMovieData = Omit<Movie, "id">;

export const addMovie = async (movieData: AddMovieData) => {
  const response = await apiInstance.post<{ movie: Movie }>(
    API_ENDPOINTS.MOVIES,
    movieData
  );

  return response.data;
}; 