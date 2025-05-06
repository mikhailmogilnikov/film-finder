import { Fragment, useMemo, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { getMoviesList, MovieFeaturedItem } from "~/entities/movie";
import { useQuery } from "~/shared/api";
import { FeaturedMoviesService } from "~/shared/lib/services/featured-movies";

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
      moviesList.movies.filter((movie) => featuredMoviesIds.includes(movie.id)),
    [moviesList, featuredMoviesIds]
  );

  return (
    <Flex gap={8} py={4} direction="column" maxW={597}>
      {featuredMovies.map((movie) => (
        <Fragment key={movie.id}>
          <MovieFeaturedItem
            key={movie.id}
            {...movie}
            onRemove={handleRemoveFeaturedMovie}
          />
          <Box as="hr" borderColor="gray.200" />
        </Fragment>
      ))}
    </Flex>
  );
}
