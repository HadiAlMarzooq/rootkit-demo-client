import { Box, Text, Button, VStack, Code } from "@chakra-ui/react";

const Slide = ({ step, onNext, onPrev }) => {
  return (
    <VStack
      bg="gray.800"
      color="green.300"
      spacing={6}
      borderRadius="md"
      alignItems="flex-start"
      w="full"
    >
      <Text fontSize="3xl" fontWeight="bold">
        {step.title}
      </Text>
      <Box as="pre" w="full" p={4} bg="gray.900" borderRadius="md">
        <Code colorScheme="green" fontFamily="mono" fontSize="lg" whiteSpace="pre-wrap">
          {step.command}
        </Code>
      </Box>
      <Text fontSize="md" color="gray.300">
        {step.explanation}
      </Text>
      <Text fontSize="sm" color="gray.300">
        Output:
      </Text>
      {/* Conditional rendering in case there is no expectedOutput for a step */}
      {step.expectedOutput && (
        <Box as="pre" w="full" p={4} bg="gray.700" borderRadius="md">
          <Code colorScheme="green" fontFamily="mono" fontSize="md" whiteSpace="pre-wrap">
            {step.expectedOutput}
          </Code>
        </Box>
      )}
      <Box alignSelf="center">
        <Button colorScheme="green" variant="outline" onClick={onPrev} mr={4}>
          Previous
        </Button>
        <Button colorScheme="green" variant="solid" onClick={onNext}>
          Next
        </Button>
      </Box>
    </VStack>
  );
};

export default Slide;
