import { useContext } from "react";
import { FormRegisterContext } from "../../providers/FormRegisterProvider";
import { StyledRegisterForm } from "./style";
import { Input } from "../Input";
import { Option } from "../Option";

export const FormRegister = () => {
  const { register, handleSubmit, registerFormSubmit, errors } =
    useContext(FormRegisterContext);

  return (
    <StyledRegisterForm onSubmit={handleSubmit(registerFormSubmit)}>
      <h3>Crie sua conta</h3>
      <h4>Rápido e grátis, vamos nessa</h4>
      <Input
        type="text"
        label="Nome"
        placeholder="Digite aqui seu nome"
        id="name"
        name="name"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        type="email"
        label="Email"
        placeholder="Digite aqui seu email"
        id="email"
        name="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        type="password"
        label="Senha"
        placeholder="Digite aqui sua senha"
        id="password"
        name="password"
        error={errors.password?.message}
        {...register("password")}
      />
      <Input
        type="password"
        label="Confirmar senha"
        placeholder="Digite novamente sua senha"
        id="confirm"
        name="confirm"
        error={errors.confirm?.message}
        {...register("confirm")}
      />
      <Input
        type="text"
        label="Bio"
        placeholder="Fale sobre você"
        id="bio"
        name="bio"
        error={errors.bio?.message}
        {...register("bio")}
      />
      <Input
        type="text"
        label="Contato"
        placeholder="Opção de contato"
        id="contact"
        name="contact"
        error={errors.contact?.message}
        {...register("contact")}
      />
      <span>
        <label htmlFor="module">Selecionar Módulo</label>
        <select
          name="course_module"
          label="Selecionar módulo"
          id="course_module"
          error={errors.course_module?.message}
          {...register("course_module")}
        >
          <Option
            value="Primeiro módulo (Introdução ao Frontend)"
            text={"Primeiro Módulo"}
          />
          <Option
            value="Segundo módulo (Frontend Avançado)"
            text={"Segundo Módulo"}
          />
          <Option
            value="Terceiro módulo (Introdução ao Backend)"
            text={"Terceiro Módulo"}
          />
          <Option
            value="Quarto módulo (Backend Avançado)"
            text={"Quarto Módulo"}
          />
        </select>
      </span>
      <button type="submit">Cadastrar</button>
    </StyledRegisterForm>
  );
};
