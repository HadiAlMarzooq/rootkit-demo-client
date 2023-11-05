import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  useDisclosure,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import React from "react";
import InitialDirContents from "./InitialDirContents";

const Introduction = ({ onStart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="xl"
        isCloseable={false}
      >
        <ModalOverlay />
        <ModalContent bg="gray.700" color="white">
          <ModalHeader>Understanding Rootkits</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Text>
                A rootkit is a collection of malicious software tools that
                enable unauthorized access and control to a computer system
                without being detected by users or security systems.
              </Text>
              <InitialDirContents />{" "}
              <Text>
                This interactive demo will simulate how a rootkit can compromise
                system integrity and security. You will observe the effects of a
                rootkit infection step by step, learning about its stealth and
                potential damage.
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onStart}>
              Start Demo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Button
          leftIcon={<InfoIcon />}
          colorScheme="green"
          variant="solid"
          onClick={onOpen}
        >
          Begin the journey 🚀
        </Button>
      </Flex>
    </>
  );
};

export default Introduction;
