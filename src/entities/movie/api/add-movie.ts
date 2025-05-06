import { apiInstance } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/api";
import { Movie } from "~/entities/movie";

export type AddMovieData = Omit<Movie, "id" | "image_url" | "genre"> & {
  genre: string;
  image?: File;
  image_url?: string;
};

export const addMovie = async (movieData: AddMovieData) => {
  const response = await apiInstance.post<{ movie: Movie }>(
    API_ENDPOINTS.MOVIES,
    movieData
  );

  return response.data;
};
