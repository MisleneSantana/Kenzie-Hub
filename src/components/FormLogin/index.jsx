import { StyledLoginForm } from "./style";
import { Input } from "../Input/index";
import { Link } from "react-router-dom";

export const FormLogin = ({
  toast,
  register,
  handleSubmit,
  loginFormSubmit,
  errors,
}) => {
  const toastError = (message) => {
    toast.error(`${message}`, {
      autoClose: 2000,
    });
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(loginFormSubmit)}>
      <h3>Login</h3>
      <Input
        type="email"
        label="Email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      {errors.email ? toastError(`${errors.email.message}`) : null}
      <Input
        type="password"
        label="Senha"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      {errors.password ? toastError(`${errors.password.message}`) : null}
      <button type="submit">Entrar</button>
      <p>Ainda não possui uma conta?</p>
      <Link to="/register">Cadastre-se</Link>
    </StyledLoginForm>
  );
};
