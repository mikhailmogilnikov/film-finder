import { Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import { AddMoviePage } from "~/pages/add-movie";
import { FeaturedMoviesPage } from "~/pages/featured-movies";
import { HomePage } from "~/pages/home";
import { MoviePage } from "~/pages/movie";
import { EditMoviePage } from "~/pages/edit-movie";

import { RootLayout } from "./layouts/root";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "movies/:id",
            element: <MoviePage />,
          },
          {
            path: "add-movie",
            element: <AddMoviePage />,
          },
          {
            path: "featured-movies",
            element: <FeaturedMoviesPage />,
          },
          {
            path: "edit-movie/:id",
            element: <EditMoviePage />,
          },
        ],
      },
    ],
  },
]);
