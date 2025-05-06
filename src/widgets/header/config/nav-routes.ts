import { APP_ROUTES } from "~/shared/config/routes";

export const NAV_ROUTES = [
  {
    path: APP_ROUTES.HOME,
    label: "Все фильмы",
  },
  {
    path: APP_ROUTES.FEATURED_MOVIES,
    label: "Избранное",
  },
  {
    path: APP_ROUTES.ADD_MOVIE,
    label: "Добавить фильм",
  },
];
