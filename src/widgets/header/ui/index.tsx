import { NavLink } from "react-router-dom";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

import { NAV_ROUTES } from "../config/nav-routes";

export function Header() {
  return (
    <Box as="header" position="sticky" top={0} zIndex={100} bg="white">
      <Container maxW="7xl">
        <nav>
          <Flex as="ul" gap={8} h={16} alignItems="center">
            {NAV_ROUTES.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  style={({ isActive }) => ({
                    color: isActive ? "hsla(231, 68%, 58%, 1)" : "inherit",
                  })}
                >
                  <Text fontWeight="medium">{route.label}</Text>
                </NavLink>
              </li>
            ))}
          </Flex>
        </nav>
      </Container>
    </Box>
  );
}
