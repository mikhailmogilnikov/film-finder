import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { LuClock } from "react-icons/lu";

import { FeaturedMoviesService } from "~/shared/lib/services/featured-movies";

import { Movie } from "../../model/movie.type";

interface MovieFeaturedItemProps extends Movie {
  onRemove?: (id: string) => void;
}

export function MovieFeaturedItem(props: MovieFeaturedItemProps) {
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    FeaturedMoviesService.removeFeaturedMovie(props.id);
    props.onRemove?.(props.id);
  };

  return (
    <Flex gap={8} alignItems="center">
      <Image
        src={props.image_url}
        alt={props.title}
        w={90}
        h={90}
        flexShrink={0}
        borderRadius="full"
        overflow="hidden"
      />
      <Flex direction="column" justifyContent="space-between" gap={4} w="100%">
        <Text fontSize="lg" fontWeight="medium">
          {props.title}
        </Text>
        <Flex gap={2} alignItems="center">
          <LuClock size={20} />
          <Text>{props.duration_minutes} мин.</Text>
        </Flex>
      </Flex>

      <Button
        size="sm"
        variant="ghost"
        color="gray.500"
        _hover={{ color: "black" }}
        onClick={handleRemove}
      >
        Удалить
      </Button>
    </Flex>
  );
}
