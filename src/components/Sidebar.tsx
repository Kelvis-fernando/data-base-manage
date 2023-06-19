import {
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  ListMagnifyingGlass,
  Table,
  TerminalWindow,
  UserCircle,
} from "@phosphor-icons/react";

const Sidebar = () => {
  return (
    <Flex
      position="fixed"
      left="0"
      flexDirection="column"
      alignItems="center"
      h="100%"
      w="50px"
      bg="black"
      pt="10"
    >
      <Box>
        <ListMagnifyingGlass size={32} color="orange" />
      </Box>
      <Box mt="100%">
        <Link href="/">
          <Table size={32} color="white" />
        </Link>
        <Link href="/console">
          <TerminalWindow size={32} color="white" />
        </Link>
      </Box>
      <Box position="fixed" bottom="10" cursor="pointer">
        <Menu>
          <MenuButton>
            <UserCircle size={32} color="white" />
          </MenuButton>
          <MenuList>
            <MenuItem>Config</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Sidebar;
