import { Grid, GridItem } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";

import { getMoviesList, MovieCard } from "~/entities/movie";
import { useQuery } from "~/shared/api";
import { APP_ROUTES } from "~/shared/config/routes";

import { MoviesListSkeleton } from "./skeleton";

export function MoviesList() {
  const [searchParams] = useSearchParams();
  const genres = searchParams.get("genres");

  const { data: moviesList, isLoading } = useQuery({
    queryKey: ["moviesList", genres ?? ""],
    queryFn: () => getMoviesList(genres ? genres.split(",") : undefined),
    initialData: { movies: [] },
  });

  return (
    <Grid gap={10} templateColumns="repeat(3, 1fr)">
      {isLoading ? (
        <MoviesListSkeleton />
      ) : (
        moviesList.movies.map((movie) => (
          <GridItem key={movie.id}>
            <Link aria-label={movie.title} to={APP_ROUTES.MOVIE(movie.id)}>
              <MovieCard {...movie} />
            </Link>
          </GridItem>
        ))
      )}
    </Grid>
  );
}
