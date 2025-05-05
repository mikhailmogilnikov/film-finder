import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "~/app/routes";

export function Providers() {
  return (
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={appRouter} />
    </ChakraProvider>
  );
}
