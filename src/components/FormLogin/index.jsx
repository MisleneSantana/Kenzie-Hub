import { useContext } from "react";
import { FormLoginContext } from "../../providers/FormLoginProvider";
import { StyledLoginForm } from "./style";
import { Input } from "../Input/index";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const { register, handleSubmit, loginFormSubmit, errors } =
    useContext(FormLoginContext);

  return (
    <StyledLoginForm onSubmit={handleSubmit(loginFormSubmit)}>
      <h3>Login</h3>
      <Input
        type="email"
        label="Email"
        name="email"
        id="email"
        placeholder="Digite aqui seu email"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        label="Senha"
        name="password"
        id="password"
        placeholder="Digite aqui sua senha"
        error={errors.password?.message}
        {...register("password")}
      />
      <button type="submit">Entrar</button>
      <p>Ainda não possui uma conta?</p>
      <Link to="/register">Cadastre-se</Link>
    </StyledLoginForm>
  );
};
