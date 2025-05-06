import { Box, Skeleton } from "@chakra-ui/react";
import { Fragment } from "react";
export function FeaturedMoviesListSkeleton() {
  const skeletons = Array.from({ length: 3 }, (_, index) => index);

  return (
    <>
      {skeletons.map((skeleton, index) => (
        <Fragment key={skeleton}>
          <Skeleton key={skeleton} height={90} width={90} borderRadius="full" />
          {index !== skeletons.length - 1 && (
            <Box as="hr" borderColor="gray.200" />
          )}
        </Fragment>
      ))}
    </>
  );
}
