import { Skeleton } from "@chakra-ui/react";

export function MoviesListSkeleton() {
  const skeletons = Array.from({ length: 9 }, (_, index) => index);

  return (
    <>
      {skeletons.map((skeleton) => (
        <Skeleton key={skeleton} w="100%" h={288} />
      ))}
    </>
  );
}
