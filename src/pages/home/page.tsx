import { MoviesList } from "~/widgets/movies-list";

export default function HomePage() {
  return <MoviesList title="Фильмы" asideContent={<div>aside</div>} />;
}
