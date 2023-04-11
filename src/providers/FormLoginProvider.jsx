import { createContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../pages/Login/loginSchema";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const FormLoginContext = createContext({});

export const FormLoginProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useContext(UserContext);

  const loginFormSubmit = (loginFormData) => {
    login(loginFormData);
  };

  return (
    <FormLoginContext.Provider
      value={{ register, handleSubmit, errors, loginFormSubmit }}
    >
      {children}
    </FormLoginContext.Provider>
  );
};
