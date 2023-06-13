import {
  Flex,
  FormControl,
  Heading,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import { Eye, EyeSlash, Database, TreeStructure } from "@phosphor-icons/react";
import { getFormData } from "../../utils/getFormData";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

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
              <Heading mb="3">Sign up to DBM</Heading>
              <FormLabel mt="3">Company Name</FormLabel>
              <Input
                type="text"
                w="full"
                name="companyName"
                placeholder="Exemple"
                id="companyName"
              />
              <Flex mt="2">
                <Box>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    w="full"
                    name="firstName"
                    placeholder="Your name"
                    id="firstName"
                  />
                </Box>
                <Box>
                  <FormLabel>Second Name</FormLabel>
                  <Input
                    type="text"
                    w="full"
                    name="secondName"
                    placeholder="Your second name"
                    id="secondName"
                  />
                </Box>
              </Flex>
              <FormLabel mt="3">E-mail</FormLabel>
              <Input
                type="email"
                w="full"
                name="email"
                placeholder="yourname@exemple.com"
                id="email"
              />
              <FormLabel mt="3">Password</FormLabel>
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
              <FormLabel mt="3">Confirm password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  id="confirmPassword"
                  name="confirmPassword"
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
                Sign Up
              </Button>
              <Flex justifyContent="space-between">
                <Link href="/login" fontWeight="bold">
                  Login
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

export default Register;
