import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Console from "./pages/Console";

const App = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="90vh" pt="50">
      <Sidebar />
      <Console />
    </Flex>
  );
};

export default App;
