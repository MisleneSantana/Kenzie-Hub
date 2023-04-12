import { createContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../pages/Register/registerSchema";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const FormRegisterContext = createContext({});

export const FormRegisterProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { postRegisterUser } = useContext(UserContext);

  const registerFormSubmit = (registerFormData) => {
    postRegisterUser(registerFormData);
  };

  return (
    <FormRegisterContext.Provider
      value={{ register, handleSubmit, errors, registerFormSubmit }}
    >
      {children}
    </FormRegisterContext.Provider>
  );
};
