import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import ConnectForm from "./pages/ConnectForm";
import Console from "./pages/Console";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<ConnectForm />} />
          <Route path="/console" element={<Console />} />
        </Routes>
      </Router>
    </Flex>
  );
};

export default App;
