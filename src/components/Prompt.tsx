import { Box, Button, Flex, Heading, Textarea } from "@chakra-ui/react";
import ResultQuery from "./ResultQuery";
import { useState } from "react";

const Prompt = () => {
  const [query, setQuery] = useState<string>();

  return (
    <Box border="1px solid black" p="1" w="70%" h="90vh" position="relative">
      <Flex justifyContent="space-between">
        <Heading>PROMPT</Heading>
        <Button
          bg="orange"
          _hover={{ bg: "orange.300" }}
          fontWeight="bold"
          type="submit"
        >
          SEND QUERY
        </Button>
      </Flex>
      <Textarea
        name="query"
        h="55%"
        onChange={(event) => setQuery(event.target.value)}
      ></Textarea>
      <ResultQuery />
    </Box>
  );
};

export default Prompt;
