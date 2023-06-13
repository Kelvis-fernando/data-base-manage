import { useState } from "react";
import FirebaseForm from "../pages/Forms/FirebaseForm";
import SqlForm from "../pages/Forms/SqlForm";

const useConnectForm = () => {
  const [database, setDatabase] = useState<string>();

  const formForDataBaseConnection = () => {
    switch (database) {
      case "Firebase":
        return <FirebaseForm />;
      case "PostgreSQL":
        return <SqlForm />;
      case "MySQL":
        return <SqlForm />;
    }
  };
  return { formForDataBaseConnection, setDatabase, database };
};

export default useConnectForm;
