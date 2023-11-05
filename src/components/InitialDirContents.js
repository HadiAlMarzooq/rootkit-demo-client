import React from 'react';
import { Box, Text, VStack, Code } from "@chakra-ui/react";

const InitialDirContents = () => {
  return (
    <VStack
      bg="gray.800"
      color="green.300"
      p={8}
      spacing={6}
      borderRadius="md"
      alignItems="flex-start"
      w="full"
    >
      <Text fontSize="3xl" fontWeight="bold">
        Initial Directory Contents
      </Text>
      <Text fontSize="lg">
        Normally, you would see the files listed in the current directory as follows:
      </Text>
      <Box as="pre" w="full" p={4} bg="gray.900" borderRadius="md">
        <Code
          colorScheme="green"
          fontFamily="mono"
          fontSize="lg"
          whiteSpace="pre-wrap"
        >
          example.txt
        </Code>
      </Box>
      <Text fontSize="md" color="gray.300">
        This is a typical output of the <Code>ls</Code> command, which lists files in the current directory.
      </Text>
    </VStack>
  );
};

export default InitialDirContents;