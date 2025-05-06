import { MoviesFilter } from "~/features/filter-movies";
import { MoviesList } from "~/widgets/movies-list";
import { PageWithTitleLayout } from "~/shared/ui/layouts/page-with-title-layout";

export default function HomePage() {
  return (
    <PageWithTitleLayout title="Фильмы" asideContent={<MoviesFilter />}>
      <MoviesList />
    </PageWithTitleLayout>
  );
}
