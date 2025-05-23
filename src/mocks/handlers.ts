import { delay, http, HttpResponse } from "msw";

import { API_ENDPOINTS } from "~/shared/api";
import { Movie } from "~/entities/movie";

const apiPath = (path: string): string => `/api${path}`;

const moviesList: Movie[] = [
  {
    id: "1",
    title: "Матрица",
    description: "Описание фильма",
    image_url:
      "https://film-grab.com/wp-content/uploads/2017/02/thematrix041.jpg",
    duration_minutes: 136,
    genre: "Боевик",
  },
  {
    id: "2",
    title: "Безумный Макс",
    description: "Описание фильма",
    image_url: "https://film-grab.com/wp-content/uploads/2016/01/52-627.jpg",
    duration_minutes: 88,
    genre: "Боевик",
  },
  {
    id: "3",
    title: "Джентельмены",
    description: "Описание фильма",
    image_url:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/600x900",
    duration_minutes: 113,
    genre: "Драма",
  },
  {
    id: "4",
    title: "Отступники",
    description: "Описание фильма",
    image_url: "https://film-grab.com/wp-content/uploads/2015/02/59-942.jpg",
    duration_minutes: 151,
    genre: "Триллер",
  },
  {
    id: "5",
    title: "Гладиатор",
    description: "Описание фильма",
    image_url:
      "https://film-grab.com/wp-content/uploads/2017/09/gladiator039.jpg",
    duration_minutes: 155,
    genre: "Боевик",
  },
  {
    id: "6",
    title: "Однажды в Голливуде",
    description: "Описание фильма",
    image_url:
      "https://film-grab.com/wp-content/uploads/2020/08/Once-Upon-a-Time-in-Hollywood-041.jpg",
    duration_minutes: 161,
    genre: "Драма",
  },
  {
    id: "7",
    title: "Предложение",
    description: "Описание фильма",
    image_url: "https://film-grab.com/wp-content/uploads/2023/12/Giant-31.jpg",
    duration_minutes: 108,
    genre: "Комедия",
  },
  {
    id: "8",
    title: "Малышка на миллион",
    description: "Описание фильма",
    image_url:
      "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbo5wpJYYEa7U4MlMQmEDUk3dtejal3HF0Zyi7N3lkFcwZukCAj9FYR8hVUTEpUKE4swZQlcG1XkWMdjsELO-EIqEsJxx5A7zVel.jpg?r=6b7",
    duration_minutes: 132,
    genre: "Драма",
  },
  {
    id: "9",
    title: "Ларри Краун",
    description: "Описание фильма",
    image_url: "https://www.kino-teatr.ru/movie/posters/big/1/97191.jpg",
    duration_minutes: 98,
    genre: "Комедия",
  },
];

export const handlers = [
  http.all("/api/*", async () => {
    await delay();
  }),

  http.get(apiPath(API_ENDPOINTS.MOVIES), ({ request }) => {
    const url = new URL(request.url);
    const genreFilter = url.searchParams.get("genres");
    
    let filteredMovies = moviesList;
    
    if (genreFilter) {
      const genres = genreFilter.split(",").map(g => g.trim().toLowerCase());
      
      filteredMovies = moviesList.filter(
        (movie) => genres.includes(movie.genre.toLowerCase())
      );
    }
    
    return HttpResponse.json<{ movies: Movie[] }>({
      movies: filteredMovies,
    });
  }),
  
  http.get(`${apiPath(API_ENDPOINTS.MOVIES)}/:id`, ({ params }) => {
    const { id } = params;
    const movie = moviesList.find((movie) => movie.id === id);
    
    if (!movie) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Фильм не найден',
      });
    }
    
    return HttpResponse.json<{ movie: Movie }>({
      movie,
    });
  }),

  // Добавление фильма
  http.post(apiPath(API_ENDPOINTS.MOVIES), async ({ request }) => {
    const newMovie = await request.json() as Omit<Movie, "id">;
    
    // Генерация уникального ID для нового фильма
    const newId = (parseInt(moviesList[moviesList.length - 1].id) + 1).toString();
    
    const movieToAdd: Movie = {
      ...newMovie,
      id: newId,
    };
    
    moviesList.push(movieToAdd);
    
    return HttpResponse.json<{ movie: Movie }>({
      movie: movieToAdd,
    }, { status: 201 });
  }),
  
  // Редактирование фильма
  http.patch(`${apiPath(API_ENDPOINTS.MOVIES)}/:id`, async ({ request, params }) => {
    const { id } = params;
    const updates = await request.json() as Partial<Omit<Movie, "id">>;
    
    const movieIndex = moviesList.findIndex((movie) => movie.id === id);
    
    if (movieIndex === -1) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Фильм не найден',
      });
    }
    
    // Обновляем фильм
    moviesList[movieIndex] = {
      ...moviesList[movieIndex],
      ...updates,
    };
    
    return HttpResponse.json<{ movie: Movie }>({
      movie: moviesList[movieIndex],
    });
  }),
  
  // Удаление фильма
  http.delete(`${apiPath(API_ENDPOINTS.MOVIES)}/:id`, ({ params }) => {
    const { id } = params;
    const movieIndex = moviesList.findIndex((movie) => movie.id === id);
    
    if (movieIndex === -1) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Фильм не найден',
      });
    }
    
    // Удаляем фильм из списка
    const deletedMovie = moviesList.splice(movieIndex, 1)[0];
    
    return HttpResponse.json<{ success: boolean, movie: Movie }>({
      success: true,
      movie: deletedMovie,
    });
  }),
];
