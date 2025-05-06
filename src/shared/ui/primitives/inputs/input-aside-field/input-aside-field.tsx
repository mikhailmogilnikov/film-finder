import { Field, Flex, Text } from "@chakra-ui/react";

interface InputAsideFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
  simulateField?: boolean;
}

export function InputAsideField({
  label,
  children,
  error,
  simulateField,
}: InputAsideFieldProps) {
  if (simulateField) {
    return (
      <Flex flexDirection="row" gap={6}>
        <Text fontSize="14px" fontWeight="normal" w={230} mt={3}>
          {label}
        </Text>
        <Flex flexDirection="column" gap={2}>
          {children}
          {error && (
            <Text fontSize="12px" fontWeight="medium" color="red.500">
              {error}
            </Text>
          )}
        </Flex>
      </Flex>
    );
  }

  return (
    <Field.Root flexDirection="row" gap={6} invalid={!!error}>
      <Field.Label fontWeight="normal" w={230} mt={3}>
        {label}
      </Field.Label>
      <Flex flexDirection="column" gap={2}>
        {children}
        {error && <Field.ErrorText>{error}</Field.ErrorText>}
      </Flex>
    </Field.Root>
  );
}
