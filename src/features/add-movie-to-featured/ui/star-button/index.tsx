import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { LuStar } from "react-icons/lu";

import { Movie } from "~/entities/movie";
import { FeaturedMoviesService } from "~/shared/lib/services/featured-movies";

interface AddToFeaturedButtonProps {
  movieId: Movie["id"];
}

export function AddToFeaturedButton({ movieId }: AddToFeaturedButtonProps) {
  const checkMovieInFeatured = () => {
    const featuredMovies = FeaturedMoviesService.getFeaturedMovies();

    return featuredMovies.includes(movieId);
  };

  const [isFeatured, setIsFeatured] = useState<boolean>(checkMovieInFeatured());

  const handleAddToFeatured = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFeatured) {
      FeaturedMoviesService.removeFeaturedMovie(movieId);
    } else {
      FeaturedMoviesService.addFeaturedMovie(movieId);
    }

    setIsFeatured(!isFeatured);
  };

  return (
    <Button
      aria-label="Добавить в избранное"
      alignItems="center"
      justifyContent="center"
      w={8}
      h={8}
      bgColor="transparent"
      borderRadius="full"
      color="hsla(36, 94%, 57%, 1)"
      _hover={{ bgColor: "gray.100" }}
      onClick={handleAddToFeatured}
    >
      <LuStar fill={isFeatured ? "hsla(36, 94%, 57%, 1)" : "transparent"} />
    </Button>
  );
}
