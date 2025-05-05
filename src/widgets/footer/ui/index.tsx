import { Container, Flex, Heading } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex as="footer" bg="black" h={90} alignItems="center">
      <Container maxW="7xl">
        <Heading as="h2" fontWeight="medium" size="lg" color="white">
          Фильмограф
        </Heading>
      </Container>
    </Flex>
  );
}
