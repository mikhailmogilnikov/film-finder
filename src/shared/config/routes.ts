export const APP_ROUTES = {
  HOME: "/",
  MOVIE: (id: string) => `/movies/${id}`,
  ADD_MOVIE: "/add-movie",
  FEATURED_MOVIES: "/featured-movies",
} as const;
