import { Suspense } from "react";
import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import { Center, Spinner, Text } from "@chakra-ui/react";

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
      <Suspense
        fallback={
          <Center h="100vh">
            <Spinner />
          </Center>
        }
      >
        <ScrollRestoration />
        <Outlet />
      </Suspense>
    ),
    errorElement: (
      <Center h="100vh">
        <Text fontSize="2xl" fontWeight="bold" color="red.500">
          Произошла непредвиденная ошибка
        </Text>
      </Center>
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
            path: "edit-movie/:movieId",
            element: <EditMoviePage />,
          },
          {
            path: "*",
            element: (
              <Center h="calc(100vh - 4rem)">
                <Text>Страница не существует</Text>
              </Center>
            ),
          },
        ],
      },
    ],
  },
]);
