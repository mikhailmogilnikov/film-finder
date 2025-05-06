import { apiInstance } from "~/shared/api";
import { API_ENDPOINTS } from "~/shared/api";
import { Movie } from "~/entities/movie";

export const deleteMovie = async (id: string) => {
  const response = await apiInstance.delete<{ success: boolean, movie: Movie }>(
    `${API_ENDPOINTS.MOVIES}/${id}`
  );

  return response.data;
}; 