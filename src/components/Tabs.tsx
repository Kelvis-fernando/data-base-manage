import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";

const Tabs = () => {
  return (
    <Box border="1px solid black" p="1" w="20%" h="90vh">
      <Heading>TABS</Heading>
      <Flex flexDirection="column" borderRadius="3" p="1">
        <Flex
          fontSize="xl"
          borderBottom="1px solid gray"
          cursor="pointer"
          mb="1"
          alignItems="center"
          justifyContent="center"
          bg="gray.200"
        >
          <Text fontWeight="bold">Tab 1</Text>
          <X size={20} color="red" fontWeight="bold" />
        </Flex>
      </Flex>
      <Flex flexDirection="column" borderRadius="3" p="1">
        <Flex
          fontSize="xl"
          borderBottom="1px solid gray"
          cursor="pointer"
          mb="1"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="bold">Tab 1</Text>
          <X size={20} color="red" fontWeight="bold" />
        </Flex>
      </Flex>
      <Flex flexDirection="column" borderRadius="3" p="1">
        <Flex
          fontSize="xl"
          borderBottom="1px solid gray"
          cursor="pointer"
          mb="1"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontWeight="bold">Tab 1</Text>
          <X size={20} color="red" fontWeight="bold" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Tabs;
