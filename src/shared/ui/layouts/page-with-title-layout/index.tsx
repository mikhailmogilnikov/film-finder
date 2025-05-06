import { Flex, Heading } from "@chakra-ui/react";

interface PageWithTitleLayoutProps {
  children: React.ReactNode;
  title: string;
  asideContent?: React.ReactNode;
}

export function PageWithTitleLayout({
  children,
  title,
  asideContent,
}: PageWithTitleLayoutProps) {
  return (
    <Flex direction="column" gap={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h3" fontWeight="semibold" size="4xl">
          {title}
        </Heading>
        {asideContent}
      </Flex>
      {children}
    </Flex>
  );
}
