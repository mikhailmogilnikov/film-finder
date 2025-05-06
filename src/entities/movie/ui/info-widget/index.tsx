import { Button, Center, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LuClock } from "react-icons/lu";

import { useQuery } from "~/shared/api";
import { AddToFeaturedButton } from "~/features/add-movie-to-featured";
import { GenreChip } from "~/entities/genre";
import { APP_ROUTES } from "~/shared/config/routes";
import { DeleteMovieButton } from "~/features/delete-movie";

import { getMovieById } from "../../api";

export function MovieInfoWidget() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["movie", id ?? ""],
    queryFn: () => getMovieById(id ?? ""),
  });

  const movie = data?.movie;

  if (isLoading || !movie) {
    return (
      <Center>
        <Spinner mt={12} />
      </Center>
    );
  }

  const handleDelete = () => {
    console.log("delete");
    void navigate(APP_ROUTES.HOME);
  };

  return (
    <Flex gap={12} w="full">
      <Image
        w={480}
        h={480}
        src={movie.image_url}
        alt={movie.title}
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.200"
        draggable={false}
        loading="lazy"
        objectFit="cover"
        flexShrink={0}
      />

      <Flex direction="column" gap={6} w="full">
        <Flex
          gap={4}
          alignItems="center"
          justifyContent="space-between"
          w="full"
        >
          <Text fontSize="4xl" fontWeight="bold">
            {movie.title}
          </Text>
          <AddToFeaturedButton movieId={movie.id} />
        </Flex>
        <Flex gap={6} alignItems="center">
          <GenreChip genre={movie.genre} />
          <Flex gap={2} alignItems="center">
            <LuClock />
            <Text fontSize="sm">{movie.duration_minutes} мин.</Text>
          </Flex>
        </Flex>
        <Text fontSize="sm">{movie.description}</Text>
        <Flex gap={8} justifyContent="end">
          <Link to={APP_ROUTES.EDIT_MOVIE(movie.id)}>
            <Button h={8} size="sm" colorPalette="blue" variant="outline">
              Редактировать
            </Button>
          </Link>
          <DeleteMovieButton movieId={movie.id} onDelete={handleDelete} />
        </Flex>
      </Flex>
    </Flex>
  );
}
