import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { addMovie, editMovie, Movie } from "~/entities/movie";

import {
  MovieDataForm,
  MovieDataFormDefaultValues,
  MovieDataFormSchema,
} from "../../model/movie-data-form.type";

interface UseMovieDataFormProps {
  movie?: Movie;
}

export const useMovieDataForm = ({ movie }: UseMovieDataFormProps) => {
  const navigate = useNavigate();

  const methods = useForm<MovieDataForm>({
    resolver: zodResolver(MovieDataFormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    defaultValues: movie
      ? {
          ...movie,
          image: undefined,
          duration_minutes: movie.duration_minutes.toString(),
        }
      : MovieDataFormDefaultValues,
  });

  const { handleSubmit: handleSubmitForm } = methods;

  const [isFormLoading, setIsFormLoading] = useState(false);

  const handleSubmit = useCallback(async (formData: MovieDataForm) => {
    // eslint-disable-next-line no-console
    console.log(formData);
    setIsFormLoading(true);

    const normalizedFormData = {
      ...formData,
      duration_minutes: Number(formData.duration_minutes),
    };

    if (movie) {
      await editMovie(movie.id, normalizedFormData)
        .then((response) => {
          void navigate(`/movies/${response.movie.id}`);
        })
        .catch(() => {
          //
        });
    } else {
      await addMovie(normalizedFormData)
        .then((response) => {
          void navigate(`/movies/${response.movie.id}`);
        })
        .catch(() => {
          //
        });
    }

    setIsFormLoading(false);
  }, []);

  const onSubmit = useMemo(
    () => handleSubmitForm(handleSubmit),
    [handleSubmitForm, handleSubmit]
  );

  return {
    methods,
    onSubmit,
    isFormLoading,
  };
};
