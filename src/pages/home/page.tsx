import { MoviesFilter } from "~/features/filter-movies";
import { MoviesList } from "~/widgets/movies-list";

export default function HomePage() {
  return <MoviesList title="Фильмы" asideContent={<MoviesFilter />} />;
}
