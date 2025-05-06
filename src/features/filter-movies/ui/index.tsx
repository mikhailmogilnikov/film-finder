import { Checkbox, CheckboxCheckedChangeDetails, Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { Genre, GenresColorPalette } from "~/entities/genre";

export function MoviesFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const genres = searchParams.get("genres");

  const genresArray = useMemo(() => Object.values(Genre), []);
  const selectedGenres = useMemo(() => {
    if (!genres) return [];

    return genres.split(",").map((g) => g.trim());
  }, [genres]);

  const handleChange =
    (genre: Genre) => (details: CheckboxCheckedChangeDetails) => {
      const newSelectedGenres = [...selectedGenres];

      if (details.checked) {
        if (!newSelectedGenres.includes(genre)) {
          newSelectedGenres.push(genre);
        }
      } else {
        const index = newSelectedGenres.indexOf(genre);

        if (index !== -1) {
          newSelectedGenres.splice(index, 1);
        }
      }

      if (newSelectedGenres.length > 0) {
        setSearchParams({ genres: newSelectedGenres.join(",") });
      } else {
        searchParams.delete("genres");
        setSearchParams(searchParams);
      }
    };

  return (
    <Flex gap={4}>
      {genresArray.map((genre) => (
        <Checkbox.Root
          key={genre}
          variant="solid"
          checked={selectedGenres.some(
            (g) => g.toLowerCase() === genre.toLowerCase()
          )}
          onCheckedChange={handleChange(genre)}
          colorPalette={GenresColorPalette[genre]}
          size="lg"
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control
            borderRadius="full"
            p={1}
            borderColor={GenresColorPalette[genre]}
            borderWidth={1}
            borderStyle="solid"
          />
          <Checkbox.Label>{genre}</Checkbox.Label>
        </Checkbox.Root>
      ))}
    </Flex>
  );
}
