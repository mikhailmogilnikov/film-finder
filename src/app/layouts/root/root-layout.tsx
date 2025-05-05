import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box, Container } from "@chakra-ui/react";

import { Footer } from "~/widgets/footer";
import { Header } from "~/widgets/header";

export default function RootLayout() {
  return (
    <Box>
      <Header />
      <Box as="main" minHeight="calc(100vh - 4rem)">
        <Container maxW="7xl" py={8}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
