import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./addModalSchema";
import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider";
import { Input } from "../Input";
import { Option } from "../Option";
import buttonClose from "../../assets/img/X.svg";
import { StyledInputContainer } from "./style";

export const AddModal = ({ setIsAddModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { handleNewTechnology } = useContext(TechContext);

  const submitFormCreateNeTech = (formData) => {
    handleNewTechnology(formData);
    setIsAddModalOpen(false);
  };

  return (
    <StyledInputContainer role="dialog">
      <span>
        <h3>Cadastrar Tecnologia</h3>
        <button onClick={() => setIsAddModalOpen(false)}>
          <img src={buttonClose} alt="X" />
        </button>
      </span>
      <form onSubmit={handleSubmit(submitFormCreateNeTech)}>
        <Input
          type="text"
          label="Nome"
          name="title"
          id="title"
          placeholder="Tecnologia"
          error={errors.title?.message}
          {...register("title")}
        />
        <label htmlFor="status">Selecionar status</label>
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
        <button type="submit" className="closeModal">
          Cadastrar Tecnologia
        </button>
      </form>
    </StyledInputContainer>
  );
};
