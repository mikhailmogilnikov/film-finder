import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { GenreChip } from "~/entities/genre";

import { Movie } from "../../model/movie.type";

type MovieCardProps = Movie;

export function MovieCard(props: MovieCardProps) {
  const { title, image_url, duration_minutes, genre } = props;

  return (
    <Flex
      direction="column"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box height={192} w="100%" bgColor="gray.100" overflow="hidden">
        <Image
          src={image_url}
          alt={title}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
      <Flex direction="column" p={4} gap={4}>
        <Text fontSize="lg" fontWeight="medium">
          {title}
        </Text>
        <Flex justifyContent="space-between">
          <GenreChip genre={genre} />
          <Text>{duration_minutes} мин.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
