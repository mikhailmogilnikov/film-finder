import { Flex, Input, Checkbox, Textarea, Text } from "@chakra-ui/react";
import { Controller, UseFormReturn } from "react-hook-form";
import { useMemo } from "react";

import { InputAsideField } from "~/shared/ui/primitives/inputs/input-aside-field";
import { Genre, GenresColorPalette } from "~/entities/genre";

import { MovieDataForm } from "../model/movie-data-form.type";

interface MovieDataFormInputsProps {
  methods: UseFormReturn<MovieDataForm>;
}

export function MovieDataFormInputs({ methods }: MovieDataFormInputsProps) {
  const genresArray = useMemo(() => Object.values(Genre), []);

  return (
    <Flex direction="column" gap={8}>
      <Controller
        control={methods.control}
        name="title"
        render={({ field, fieldState: { error } }) => (
          <InputAsideField label="Название фильма" error={error?.message}>
            <Input {...field} w={370} />
          </InputAsideField>
        )}
      />
      <Controller
        control={methods.control}
        name="genre"
        render={({ field, fieldState: { error } }) => (
          <InputAsideField label="Жанр" error={error?.message} simulateField>
            <Flex direction="row" gap={4} mt={2} wrap="wrap">
              {genresArray.map((genreItem) => (
                <Checkbox.Root
                  key={genreItem}
                  variant="solid"
                  checked={field.value === genreItem.toString()}
                  onCheckedChange={(details) => {
                    if (details.checked) {
                      field.onChange(genreItem.toString());
                    }
                  }}
                  colorPalette={GenresColorPalette[genreItem]}
                  size="lg"
                >
                  <Checkbox.HiddenInput />
                  <Checkbox.Control
                    borderRadius="full"
                    p={1}
                    borderColor={GenresColorPalette[genreItem]}
                    borderWidth={1}
                    borderStyle="solid"
                  />
                  <Checkbox.Label fontSize="14px" fontWeight="500">
                    {genreItem}
                  </Checkbox.Label>
                </Checkbox.Root>
              ))}
            </Flex>
          </InputAsideField>
        )}
      />
      <Controller
        control={methods.control}
        name="duration_minutes"
        render={({ field, fieldState: { error } }) => (
          <InputAsideField label="Длительность" error={error?.message}>
            <Flex direction="row" gap={4} mt={2} wrap="wrap">
              <Input {...field} w={84} type="number" />
              <Text fontSize="13px" mt={3}>
                мин
              </Text>
            </Flex>
          </InputAsideField>
        )}
      />
      <Controller
        control={methods.control}
        name="description"
        render={({ field, fieldState: { error } }) => (
          <InputAsideField label="Описание" error={error?.message}>
            <Textarea {...field} w={370} h={140} />
          </InputAsideField>
        )}
      />
      <Controller
        control={methods.control}
        name="image"
        render={({ field, fieldState: { error } }) => (
          <InputAsideField label="Изображение" error={error?.message}>
            <Flex direction="row" align="center" gap={4}>
              <Flex
                as="label"
                bg="gray.200"
                py={3}
                px={4}
                borderRadius="md"
                cursor="pointer"
                flexShrink={0}
                _hover={{ bg: "gray.300" }}
              >
                Выбрать файл
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      field.onChange(e.target.files[0]);
                    }
                  }}
                  hidden
                />
              </Flex>
              {field.value && (
                <Flex
                  align="center"
                  maxW={212}
                  h="40px"
                  borderRadius="md"
                  gap={2}
                  border="1px solid"
                  borderColor="gray.200"
                  px={3}
                >
                  <Text fontSize="sm">{field.value.name}</Text>
                </Flex>
              )}
            </Flex>
          </InputAsideField>
        )}
      />
      <Controller
        control={methods.control}
        name="image_url"
        render={({ field, fieldState: { error } }) => (
          <InputAsideField label="URL изображения" error={error?.message}>
            <Input
              {...field}
              w={370}
              placeholder="https://example.com/image.jpg"
            />
          </InputAsideField>
        )}
      />
    </Flex>
  );
}
