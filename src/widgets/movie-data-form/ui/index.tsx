import { Button, Flex } from "@chakra-ui/react";

import { Movie } from "~/entities/movie";

import { useMovieDataForm } from "../lib/hooks/use-movie-data";

import { MovieDataFormInputs } from "./inputs";

interface MovieDataFormProps {
  movie?: Movie;
}

export function MovieDataForm(props: MovieDataFormProps) {
  const { methods, onSubmit, isFormLoading } = useMovieDataForm(props);

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
      <form 
        onSubmit={(e) => {
          void onSubmit(e);
        }}
        noValidate
      >
        <MovieDataFormInputs methods={methods} />
        <Button
          mt={12}
          ml={254}
          variant="solid"
          colorPalette="blue"
          type="submit"
          loading={isFormLoading}
        >
          Сохранить
        </Button>
      </form>
    </Flex>
  );
}
