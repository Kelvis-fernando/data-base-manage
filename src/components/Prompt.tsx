import { Box, Heading, Textarea } from "@chakra-ui/react";
import ResultQuery from "./ResultQuery";

const Prompt = () => {
  return (
    <Box border="1px solid black" p="1" w="70%" h="90vh">
      <Heading>PROMPT</Heading>
      <Textarea h="55%"></Textarea>
      <ResultQuery />
    </Box>
  );
};

export default Prompt;
