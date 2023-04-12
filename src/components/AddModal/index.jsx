import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./addModalSchema";
import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider";
import { Input } from "../Input";
import { Option } from "../Option";
import buttonClose from "../../assets/img/X.svg";

export const AddModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { createNewTechnology } = useContext(TechContext);

  const modalFormSubmit = (formData) => {
    createNewTechnology(formData);
  };

  return (
    <div role="dialog">
      <form onSubmit={handleSubmit(modalFormSubmit)}>
        <div>
          <h3>Cadastrar Tecnologia</h3>
          <img src={buttonClose} alt="X"></img>
        </div>
        <Input
          type="text"
          label="Nome"
          name="title"
          id="title"
          placeholder="Tecnologia"
          error={errors.title?.message}
          {...register("title")}
        />
        <select
          name="status"
          label="Selecionar status"
          id="status"
          error={errors.status?.message}
          {...register("status")}
        >
          <Option value="Iniciante" text={"Iniciante"} />
          <Option value="Intermediário" text={"Intermediário"} />
          <Option value="Avançado" text={"Avançado"} />
        </select>
        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </div>
  );
};
