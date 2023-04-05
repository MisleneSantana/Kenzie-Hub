import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { StyledMainContainer } from "./style";
import { Header } from "../../../src/components/Header";

export const Login = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      navigate("/home");
      return responseApi;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <StyledMainContainer>
        <form onSubmit={handleSubmit(loginFormSubmit)}>
          <h3>Login</h3>
          <Input
            type="email"
            label="Email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : null}
          <Input
            type="password"
            label="Senha"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <button type="submit">Entrar</button>
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </form>
      </StyledMainContainer>
    </>
  );
};
