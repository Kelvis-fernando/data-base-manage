import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Console from "./pages/Console";

const App = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <Sidebar />
      <Console />
    </Flex>
  );
};

export default App;
