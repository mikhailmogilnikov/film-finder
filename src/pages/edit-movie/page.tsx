import { Center, Spacer, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { getMovieById } from "~/entities/movie";
import { useQuery } from "~/shared/api";
import { PageWithTitleLayout } from "~/shared/ui/layouts/page-with-title-layout";
import { MovieDataForm } from "~/widgets/movie-data-form";

export default function EditMoviePage() {
  const { movieId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["movie", movieId ?? ""],
    queryFn: () => getMovieById(movieId ?? ""),
  });

  return (
    <PageWithTitleLayout title="Редактировать фильм">
      <Spacer />
      {isLoading && !data?.movie ? (
        <Center>
          <Spinner mt={12} />
        </Center>
      ) : (
        <MovieDataForm movie={data?.movie} />
      )}
    </PageWithTitleLayout>
  );
}
