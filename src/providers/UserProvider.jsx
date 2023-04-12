import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false); //Para uso futuro.
  // console.log(loading);

  const [userRegister, setUserRegister] = useState("");
  // console.log(responseApi);

  const navigate = useNavigate();

  // *Toasts*:
  const toastSuccess = () => {
    toast.success("Conta criada com sucesso!", {
      autoClose: 2000,
    });
  };

  const toastError = () => {
    toast.error("Ops! Algo deu errado", {
      autoClose: 2000,
    });
  };

  // *Login*:
  const login = async (loginFormData) => {
    try {
      const responseApi = await api
        .post("/sessions", loginFormData)
        .then((response) => {
          localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
          localStorage.setItem(
            "@USERID",
            JSON.stringify(response.data.user.id)
          );
          setUser(response.data.user);
        });
      navigate("/home");
      return responseApi;
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 2000,
      });
    } finally {
      setLoading(true);
    }
  };

  // *Register*:
  const postRegisterUser = async (registerFormData) => {
    try {
      const responseApi = await api
        .post("/users", registerFormData)
        .then((response) => {
          setUserRegister(response.data);
        });
      toastSuccess();
      navigate("/");
      return responseApi;
    } catch (error) {
      toastError();
    }
  };

  // *Return Provider*:
  return (
    <UserContext.Provider
      value={{ user, setUser, login, postRegisterUser, toast }}
    >
      {children}
    </UserContext.Provider>
  );
};
