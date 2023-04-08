import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Header } from "../../../src/components/Header";
import { StyledMainContainer } from "./style";
import { FormLogin } from "../../components/FormLogin";

export const Login = ({ setUser, toast }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false); //Para uso futuro.
  // console.log(loading);

  const navigate = useNavigate();

  const loginFormSubmit = (loginFormData) => {
    login(loginFormData);
  };

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
    <>
      <Header />
      <StyledMainContainer>
        <FormLogin
          toast={toast}
          register={register}
          handleSubmit={handleSubmit}
          loginFormSubmit={loginFormSubmit}
          errors={errors}
        />
      </StyledMainContainer>
    </>
  );
};
