import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false); //Para uso futuro.
  // console.log(loading);

  const navigate = useNavigate();

  const login = async (loginFormData) => {
    try {
      const responseApi = await api
        .post("/sessions", loginFormData)
        .then((response) => {
          setUser(response.data.user);
          localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
          localStorage.setItem(
            "@USERID",
            JSON.stringify(response.data.user.id)
          );
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

  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
};
