import { Box, Flex, FormLabel, Input } from "@chakra-ui/react";

const FirebaseForm = () => {
  return (
    <>
      <Flex justifyContent="space-around">
        <Box w="100%" p="5">
          <FormLabel id="apiKey">Api Key</FormLabel>
          <Input required id="apiKey" type="text" name="apiKey" />
        </Box>
        <Box w="100%" p="5">
          <FormLabel id="authDomain">Auth Domain</FormLabel>
          <Input required id="authDomain" type="text" name="authDomain" />
        </Box>
        <Box w="100%" p="5">
          <FormLabel id="projectId">Project Id</FormLabel>
          <Input required id="projectId" type="text" name="projectId" />
        </Box>
      </Flex>
      <Flex justifyContent="space-around">
        <Box w="100%" p="5">
          <FormLabel id="storageBucket">Storage Bucket</FormLabel>
          <Input required id="storageBucket" type="text" name="storageBucket" />
        </Box>
        <Box w="100%" p="5">
          <FormLabel id="messagingSenderId">Messaging Sender Id</FormLabel>
          <Input
            required
            id="messagingSenderId"
            type="text"
            name="messagingSenderId"
          />
        </Box>
        <Box w="100%" p="5">
          <FormLabel id="appId">App Id</FormLabel>
          <Input required id="appId" type="text" name="appId" />
        </Box>
      </Flex>
    </>
  );
};

export default FirebaseForm;
