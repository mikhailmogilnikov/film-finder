import TypedLocalStore from "typed-local-store";

import { Movie } from "~/entities/movie";

interface LocalStorageSchema {
  featuredMovies: Movie["id"][];
}

export const LocalStorage = new TypedLocalStore<LocalStorageSchema>({
  storage: "localStorage",
});
