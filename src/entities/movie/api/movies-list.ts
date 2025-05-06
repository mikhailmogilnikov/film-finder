import { apiInstance } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/api";
import { Movie } from "~/entities/movie";

export const getMoviesList = async (
  genres: string[] | undefined = undefined
) => {
  console.log(genres);
  const response = await apiInstance.get<{ movies: Movie[] }>(
    API_ENDPOINTS.MOVIES,
    {
      params: {
        genres: genres ? genres.join(",") : undefined,
      },
    }
  );

  return response.data;
};
