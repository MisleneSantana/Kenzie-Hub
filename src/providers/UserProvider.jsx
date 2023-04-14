import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  // *States*
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRegister, setUserRegister] = useState(""); //Uso futuro.

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

  // *Logged in user profile request (token)* - Auto-Login:
  useEffect(() => {
    const loggedInUserProfile = async () => {
      try {
        const userToken = localStorage.getItem("@TOKEN");

        if (!userToken) {
          return;
        }
        api.defaults.headers.common.Authorization = `Bearer ${userToken}`;

        const response = await api.get("/profile");

        setUser(response.data);
      } catch (error) {
        localStorage.clear();
        toastError();
      } finally {
        setLoading(false);
      }
    };

    loggedInUserProfile();
  }, []);

  // *Login*:
  const login = async (loginFormData) => {
    try {
      const responseApi = await api
        .post("/sessions", loginFormData)
        .then((response) => {
          const { user: userResponse, token } = response.data;

          api.defaults.headers.common.Authorization = `Bearer ${token}`;

          localStorage.setItem("@TOKEN", token);
          localStorage.setItem("@USERID", JSON.stringify(userResponse.id));

          setUser(userResponse);
          navigate("/home");
        });

      return responseApi;
    } catch (error) {
      toastError();
    } finally {
      setLoading(false);
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
        setUser,
        loading,
        setLoading,
        postRegisterUser,
        toast,
        toastSuccess,
        toastError,
        navigate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

