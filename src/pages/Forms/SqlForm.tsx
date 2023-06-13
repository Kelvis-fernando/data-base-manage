import { Box, Flex, FormLabel, Input } from "@chakra-ui/react";

const SqlForm = () => {
  return (
    <>
      <Flex justifyContent="space-around">
        <Box w="100%" p="5">
          <FormLabel id="host">Host</FormLabel>
          <Input id="host" type="text" name="host" />
        </Box>
        <Box w="100%" p="5">
          <FormLabel id="post">Port</FormLabel>
          <Input id="post" type="text" name="post" />
        </Box>
        <Box w="100%" p="5">
          <FormLabel id="database">Database</FormLabel>
          <Input id="database" type="text" name="database" />
        </Box>
      </Flex>
      <Flex justifyContent="space-around">
        <Box w="100%" p="5">
          <FormLabel id="user">User</FormLabel>
          <Input id="user" type="text" name="user" />
        </Box>
        <Box w="100%" p="5">
          <FormLabel id="password">Password</FormLabel>
          <Input id="password" type="password" name="password" />
        </Box>
      </Flex>
    </>
  );
};

export default SqlForm;
