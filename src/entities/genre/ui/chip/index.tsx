import { Badge } from "@chakra-ui/react";

import { Genre } from "../../model/genre.type";
import { GenresColorPalette } from "../../config/genres-color-palette";

interface GenreChipProps {
  genre: `${Genre}`;
}

export function GenreChip({ genre }: GenreChipProps) {
  return (
    <Badge
      borderRadius="full"
      size="lg"
      px={3}
      colorPalette={GenresColorPalette[genre]}
    >
      {genre}
    </Badge>
  );
}
