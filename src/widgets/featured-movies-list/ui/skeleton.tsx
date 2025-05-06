import { Flex, Skeleton } from "@chakra-ui/react";

export function FeaturedMoviesListSkeleton() {
  const skeletons = Array.from({ length: 3 }, (_, index) => index);

  return (
    <Flex gap={8} py={4} direction="column" maxW={597}>
      {skeletons.map((skeleton) => (
        <Skeleton key={skeleton} height={90} width={90} borderRadius="full" />
      ))}
    </Flex>
  );
}
