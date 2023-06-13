import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Text,
} from "@chakra-ui/react";
import useConnectForm from "../hooks/useConnectForm";
import { getFormData } from "../utils/getFormData";

const ConnectForm = () => {
  const { formForDataBaseConnection, setDatabase, database } = useConnectForm();

  return (
    <Box border="1px solid black" p="1" w="80%" h="90vh" borderRadius="3">
      <Heading>Connect your DB</Heading>
      <form onSubmit={getFormData}>
        <FormControl mt="10" isRequired>
          <Flex flexDir="column" alignItems="flex-start" ml="5">
            <FormLabel>Select your DB</FormLabel>
            <Select
              placeholder="Select option"
              w="20%"
              onChange={(event) => setDatabase(event.target.value)}
            >
              <option value="Firebase">Firebase</option>
              <option value="PostgreSQL">PostgreSQL</option>
              <option value="MySQL">MySQL</option>
            </Select>
          </Flex>
          {!database ? (
            <Text textAlign="center" fontWeight="bold" fontSize="3xl">
              Select a DB!
            </Text>
          ) : (
            formForDataBaseConnection()
          )}
          <Flex justifyContent="flex-end">
            <Button
              bg="orange"
              _hover={{ bg: "orange.300" }}
              fontWeight="bold"
              m="5"
              type="submit"
            >
              Connect
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
};

export default ConnectForm;
