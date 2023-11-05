import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import useSlideStore from "./stores/useSlideStore";
import Slide from "./components/Slide";
import Introduction from "./components/Introduction";
import steps from "./data/steps";
import Conclusion from "./components/Conclusion";
const App = () => {
  const { slideIndex, setSlideIndex } = useSlideStore();
  const { onClose } = useDisclosure();

  const startDemo = () => {
    onClose();
    setSlideIndex(1);
  };

  const nextSlide = () => {
    if (slideIndex < steps.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      bg="gray.800"
    >
      <Box width="full" maxWidth="md" p={4}>
        {slideIndex === 0 && <Introduction onStart={startDemo} />}

        {slideIndex > 0 && slideIndex < steps.length - 1 && (
          <Slide
            step={steps[slideIndex]}
            onNext={nextSlide}
            onPrev={prevSlide}
          />
        )}

        {slideIndex === steps.length - 1 && <Conclusion />}
      </Box>
    </Flex>
  );
};

export default App;
