import { useState } from "react";

const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  return {handleClick, setShowPassword, showPassword};
};

export default useLogin;
