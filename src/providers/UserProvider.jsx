import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  // *States*
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRegister, setUserRegister] = useState(""); //Uso futuro.
  const [updateTech, setUpdateTech] = useState([]);

  const navigate = useNavigate();
  console.log(updateTech);

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

  // *Logged in user profile request (token)* - Auto-Login:
  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("@TOKEN"));

    if (userToken) {
      const loggedInUserProfile = async () => {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${userToken}`;

          const response = await api.get("/profile");

          setUser(response.data);
          // setUpdateTech(response.data.techs);
        } catch (error) {
          localStorage.clear();
          toastError();
        } finally {
          setLoading(false);
        }
      };
      loggedInUserProfile();
    }
  }, []);

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

          api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

          setUser(response.data.user);
          navigate("/home");
        });

      return responseApi;
    } catch (error) {
      toastError();
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
      value={{
        login,
        user,
        loading,
        setUser,
        setLoading,
        updateTech,
        setUpdateTech,
        postRegisterUser,
        toast,
        toastSuccess,
        toastError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
