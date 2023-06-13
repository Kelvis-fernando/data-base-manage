import { Box, Flex, FormLabel, Input, Select } from "@chakra-ui/react";

const FirebaseForm = () => {
  return (
    <>
      <Flex justifyContent="space-around">
        <Box w="100%" p="5">
          <FormLabel>DB Name</FormLabel>
          <Input type="text" />
        </Box>
        <Box w="100%" p="5">
          <FormLabel>Firebase console adress</FormLabel>
          <Input type="text" />
        </Box>
        <Box w="100%" p="5">
          <FormLabel>Type of firebase DB</FormLabel>
          <Select placeholder="Select option" w="100%">
            <option value="Realtime database">Realtime database</option>
            <option value="Firebase DB">Firebase DB</option>
          </Select>
        </Box>
      </Flex>
    </>
  );
};

export default FirebaseForm;
