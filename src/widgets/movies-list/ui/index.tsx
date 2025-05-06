import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";

import { getMoviesList, MovieCard } from "~/entities/movie";
import { useQuery } from "~/shared/api";
import { APP_ROUTES } from "~/shared/config/routes";

import { MoviesListSkeleton } from "./skeleton";

interface MoviesListProps {
  title: string;
  asideContent: React.ReactNode;
}

export function MoviesList({ title, asideContent }: MoviesListProps) {
  const [searchParams] = useSearchParams();
  const genres = searchParams.get("genres");

  const { data: moviesList, isLoading } = useQuery({
    queryKey: ["moviesList", genres ?? ""],
    queryFn: () => getMoviesList(genres ? genres.split(",") : undefined),
    initialData: { movies: [] },
  });

  return (
    <Flex direction="column" gap={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h3" fontWeight="semibold" size="4xl">
          {title}
        </Heading>
        {asideContent}
      </Flex>

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
    </Flex>
  );
}
