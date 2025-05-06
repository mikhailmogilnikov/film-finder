import { Spacer } from "@chakra-ui/react";

import { PageWithTitleLayout } from "~/shared/ui/layouts/page-with-title-layout";
import { MovieDataForm } from "~/widgets/movie-data-form";

export default function AddMoviePage() {
  return (
    <PageWithTitleLayout title="Добавить фильм">
      <Spacer />
      <MovieDataForm />
    </PageWithTitleLayout>
  );
}
