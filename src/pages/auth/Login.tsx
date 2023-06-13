import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { Database, Eye, EyeSlash, TreeStructure } from "@phosphor-icons/react";
import { getFormData } from "../../utils/getFormData";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { handleClick, showPassword } = useLogin();

  return (
    <Flex
      border="1px solid black"
      w="60%"
      borderRadius="3"
      p="10"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex>
        <Box w="full">
          <form onSubmit={getFormData}>
            <FormControl isRequired>
              <Heading mb="3">Welcome to DBM</Heading>
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                w="full"
                name="email"
                placeholder="yourname@exemple.com"
                id="email"
              />
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  id="password"
                  name="password"
                />
                <InputRightElement width="3.2rem">
                  <Button size="sm" onClick={handleClick}>
                    {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                type="submit"
                w="full"
                mt="4"
                bg="orange"
                fontWeight="bold"
                _hover={{ bg: "orange.300" }}
              >
                Sign In
              </Button>
              <Flex justifyContent="space-between">
                <Link href="/register" fontWeight="bold">
                  Register
                </Link>
                <Link href="/forgot-password" fontWeight="bold">
                  Forgot password
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

export default Login;
