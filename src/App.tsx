import { Flex } from "@chakra-ui/react";
import Tabs from "./components/Tabs";
import Prompt from "./components/Prompt";

const App = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="90vh" pt="50">
      <Tabs />
      <Prompt />
    </Flex>
  );
};

export default App;
