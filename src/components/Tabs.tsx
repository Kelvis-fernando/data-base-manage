import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";

const Tabs = () => {
  return (
    <Box border="1px solid black" p="1" w="20%" h="90vh" borderRadius="3">
      <Heading>TABS</Heading>
      <Flex
        fontSize="sm"
        p="2"
        borderBottom="1px solid gray"
        cursor="pointer"
        mt="5"
        mb="1"
        alignItems="center"
        justifyContent="center"
        bg="gray.200"
      >
        <Text fontWeight="bold">Query to select all my users</Text>
        <X size={20} color="red" fontWeight="bold" />
      </Flex>
      <Flex
        fontSize="sm"
        p="2"
        borderBottom="1px solid gray"
        cursor="pointer"
        mb="1"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontWeight="bold">Query to my postgreSQL DB</Text>
        <X size={20} color="red" fontWeight="bold" />
      </Flex>

      <Flex
        fontSize="sm"
        p="2"
        borderBottom="1px solid gray"
        cursor="pointer"
        mb="1"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontWeight="bold">Join into dashboard table</Text>
        <X size={20} color="red" fontWeight="bold" />
      </Flex>
    </Box>
  );
};

export default Tabs;
