import { useState } from "react";
import FirebaseForm from "../pages/Forms/FirebaseForm";
import { Text } from "@chakra-ui/react";

const useConnectForm = () => {
  const [database, setDatabase] = useState<string>();

  const formForDataBaseConnection = () => {
    switch (database) {
      case "Firebase":
        return <FirebaseForm />;
      case "PostgreSQL":
        return (
          <Text textAlign="center" fontWeight="bold" fontSize="3xl">
            Form em contrução!
          </Text>
        );
      case "MySQL":
        return (
          <Text textAlign="center" fontWeight="bold" fontSize="3xl">
            Form em contrução!
          </Text>
        );
    }
  };
  return { formForDataBaseConnection, setDatabase, database };
};

export default useConnectForm;
