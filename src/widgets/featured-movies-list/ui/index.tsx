import { Fragment, useMemo, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { getMoviesList, MovieFeaturedItem } from "~/entities/movie";
import { useQuery } from "~/shared/api";
import { FeaturedMoviesService } from "~/shared/lib/services/featured-movies";
import { APP_ROUTES } from "~/shared/config/routes";

import { FeaturedMoviesListSkeleton } from "./skeleton";

export function FeaturedMoviesList() {
  const { data: moviesList, isLoading } = useQuery({
    queryKey: ["featuredMovies"],
    queryFn: () => getMoviesList(),
    initialData: { movies: [] },
  });

  const [featuredMoviesUpdated, setFeaturedMoviesUpdated] = useState(0);

  const handleRemoveFeaturedMovie = () => {
    setFeaturedMoviesUpdated((prev) => prev + 1);
  };

  const featuredMoviesIds = useMemo(() => {
    return FeaturedMoviesService.getFeaturedMovies();
  }, [featuredMoviesUpdated]);

  const featuredMovies = useMemo(
    () =>
      moviesList?.movies.filter((movie) =>
        featuredMoviesIds.includes(movie.id)
      ),
    [moviesList, featuredMoviesIds]
  );

  return (
    <Flex gap={8} py={4} direction="column" maxW={597}>
      {isLoading && <FeaturedMoviesListSkeleton />}
      {featuredMovies?.map((movie) => (
        <Fragment key={movie.id}>
          <Link to={APP_ROUTES.MOVIE(movie.id)}>
            <MovieFeaturedItem
              key={movie.id}
              {...movie}
              onRemove={handleRemoveFeaturedMovie}
            />
          </Link>
          <Box as="hr" borderColor="gray.200" />
        </Fragment>
      ))}
    </Flex>
  );
}
