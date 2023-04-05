import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Option } from "../../components/Option/index";
import { registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../src/components/Header";
import { Link } from "react-router-dom";
import { StyledRegisterMainContainer } from "./style";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const [responseApi, setResponseApi] = useState("");
  const navigate = useNavigate();

  const registerFormSubmit = (registerFormData) => {
    postRegisterUser(registerFormData);
  };

  const postRegisterUser = async (registerFormData) => {
    try {
      const responseApi = await api
        .post("/users", registerFormData)
        .then((response) => {
          // console.log(response);
          setResponseApi(response.data);
        });
      navigate("/");
      return responseApi;
    } catch (error) {
      toast.error;
    }
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <Header>
        <Link to="/">Voltar</Link>
      </Header>
      <StyledRegisterMainContainer>
        <form onSubmit={handleSubmit(registerFormSubmit)}>
          <h3>Crie sua conta</h3>
          <p>Rápido e grátis, vamos nessa</p>
          <Input
            type="text"
            label="Nome"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
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
          <Input
            type="password"
            label="Confirmar senha"
            placeholder="Digite novamente sua senha"
            {...register("confirm")}
          />
          {errors.confirm ? <p>{errors.confirm.message}</p> : null}
          <Input
            type="text"
            label="Bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio ? <p>{errors.bio.message}</p> : null}
          <Input
            type="text"
            label="Contato"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact ? <p>{errors.contact.message}</p> : null}
          <span>
            <label htmlFor="module">Selecionar Módulo</label>
            <select
              name="module"
              label="Selecionar módulo"
              {...register("course_module")}
            >
              <Option
                value="Primeiro módulo (Introdução ao Frontend)"
                innerText={"Primeiro Módulo"}
              />
              <Option
                value="Segundo módulo (Frontend Avançado)"
                innerText={"Segundo Módulo"}
              />
              <Option
                value="Terceiro módulo (Introdução ao Backend)"
                innerText={"Terceiro Módulo"}
              />
              <Option
                value="Quarto módulo (Backend Avançado)"
                innerText={"Quarto Módulo"}
              />
            </select>
          </span>
          {errors.course_module ? <p>{errors.course_module.message}</p> : null}
          <button type="submit">Cadastrar</button>
        </form>
      </StyledRegisterMainContainer>
    </>
  );
};
