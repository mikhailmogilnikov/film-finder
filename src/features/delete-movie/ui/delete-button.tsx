import { Button } from "@chakra-ui/react";
import { useState } from "react";

import { deleteMovie } from "~/entities/movie/api/delete-movie";

interface DeleteMovieButtonProps {
  movieId: string;
  onDelete: () => void;
}

export function DeleteMovieButton({
  movieId,
  onDelete,
}: DeleteMovieButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteMovie(movieId);
      onDelete();
    } catch {
      //
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      h={8}
      size="sm"
      colorPalette="blue"
      variant="outline"
      onClick={void handleDelete}
      loading={isLoading}
    >
      Удалить
    </Button>
  );
}
