import { PageWithTitleLayout } from "~/shared/ui/layouts/page-with-title-layout";
import { FeaturedMoviesList } from "~/widgets/featured-movies-list";

export default function FeaturedMoviesPage() {
  return (
    <PageWithTitleLayout title="Избранное">
      <FeaturedMoviesList />
    </PageWithTitleLayout>
  );
}
