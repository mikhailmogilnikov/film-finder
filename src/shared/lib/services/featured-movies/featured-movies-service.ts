import { LocalStorage } from "../storage";

class featuredMoviesService {
  public getFeaturedMovies() {
    return LocalStorage.getItem("featuredMovies", "safe") ?? [];
  }

  public addFeaturedMovie(movieId: string) {
    const featuredMovies = this.getFeaturedMovies();

    featuredMovies.push(movieId);
    LocalStorage.setItem("featuredMovies", featuredMovies);
  }

  public removeFeaturedMovie(movieId: string) {
    const featuredMovies = this.getFeaturedMovies();

    featuredMovies.splice(featuredMovies.indexOf(movieId), 1);
    LocalStorage.setItem("featuredMovies", featuredMovies);
  }
}

export const FeaturedMoviesService = new featuredMoviesService();
