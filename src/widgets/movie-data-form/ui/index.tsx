import { Flex } from "@chakra-ui/react";

import { Movie } from "~/entities/movie";

import { useMovieData } from "../lib/hooks/use-movie-data";

interface MovieDataFormProps {
  movie?: Movie;
}

export function MovieDataForm(props: MovieDataFormProps) {
  const ds = useMovieData();

  return (
    <Flex
      p={12}
      gap={4}
      w={785}
      mx="auto"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      flexDir="column"
    >
      <Flex gap={4}>ds</Flex>
    </Flex>
  );
}
