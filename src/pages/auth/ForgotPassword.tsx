import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Database, TreeStructure } from "@phosphor-icons/react";
import { getFormData } from "../../utils/getFormData";

const ForgotPassword = () => {
  return (
    <Flex
      border="1px solid black"
      w="70%"
      borderRadius="3"
      p="10"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex>
        <Box w="full">
          <form onSubmit={getFormData}>
            <FormControl isRequired>
              <Heading mb="3">Forgot Password</Heading>

              <FormLabel mt="3">E-mail</FormLabel>
              <Input
                type="email"
                w="full"
                name="email"
                placeholder="yourname@exemple.com"
                id="email"
              />
              <Button
                type="submit"
                w="full"
                mt="4"
                bg="orange"
                fontWeight="bold"
                _hover={{ bg: "orange.300" }}
              >
                Sign Up
              </Button>
              <Flex justifyContent="space-between">
                <Link href="/login" fontWeight="bold">
                  Login
                </Link>
                <Link href="/register" fontWeight="bold">
                  Register
                </Link>
              </Flex>
            </FormControl>
          </form>
        </Box>
      </Flex>
      <Box textAlign="center" w="40%">
        <Heading>Manage and see your data!</Heading>
        <Text>All you want to manage your own business</Text>
        <Flex justifyContent="space-between">
          <Database size={200} />
          <TreeStructure size={200} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default ForgotPassword;
