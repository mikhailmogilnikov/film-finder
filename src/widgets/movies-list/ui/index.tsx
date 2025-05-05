import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

interface MoviesListProps {
  title: string;
  asideContent: React.ReactNode;
}

export function MoviesList({ title, asideContent }: MoviesListProps) {
  return (
    <Flex direction="column" gap={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h3" fontWeight="semibold" size="4xl">
          {title}
        </Heading>
        {asideContent}
      </Flex>
      <Grid gap={10} templateColumns="repeat(3, 1fr)">
        <GridItem>sd</GridItem>
        <GridItem>sd</GridItem>
        <GridItem>sd</GridItem>
        <GridItem>sd</GridItem>
        <GridItem>sd</GridItem>
        <GridItem>sd</GridItem>
        <GridItem>sd</GridItem>
      </Grid>
    </Flex>
  );
}
