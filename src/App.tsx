import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import ConnectForm from "./pages/ConnectForm";
import Console from "./pages/Console";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";

const App = () => {
  const path = window.location.href;
  const validadeLogin = /login/i;

  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
      {!validadeLogin.test(path) ? <Sidebar /> : null}
      <Router>
        <Routes>
          <Route path="/" element={<ConnectForm />} />
          <Route path="/console" element={<Console />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Flex>
  );
};

export default App;
