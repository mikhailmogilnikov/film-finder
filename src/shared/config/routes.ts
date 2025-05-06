export const APP_ROUTES = {
  HOME: "/",
  MOVIE: (id: string) => `/movies/${id}`,
  ADD_MOVIE: "/add-movie",
  FEATURED_MOVIES: "/featured-movies",
  EDIT_MOVIE: (id: string) => `/edit-movie/${id}`,
} as const;
