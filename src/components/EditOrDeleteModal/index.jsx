import { StyledModalPreviewTech } from "./style";
import buttonClose from "../../assets/img/X.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editOrDeleteSchema } from "./editOrDeleteSchema";
import { Input } from "../Input";
import { Option } from "../Option";
import { useContext } from "react";
import { TechContext } from "../../providers/TechProvider";

export const EditOrDeleteModal = ({ tech, setIsEditOrDeleteModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editOrDeleteSchema),
  });

  const { handleUpdateTech, handleDeleteTech } = useContext(TechContext);
  const techId = tech.id;

  const modalEditOrDeleteSubmit = (formData) => {
    // console.log(formData);
    handleUpdateTech(techId, formData);
    setIsEditOrDeleteModalOpen(false);
  };

  return (
    <StyledModalPreviewTech role="dialog">
      <span>
        <h3>Tecnologias detalhadas</h3>
        <button onClick={() => setIsEditOrDeleteModalOpen(false)}>
          <img src={buttonClose} alt="X" />
        </button>
      </span>
      <form onSubmit={handleSubmit(modalEditOrDeleteSubmit)}>
        <Input
          label="Nome do projeto"
          name={tech.title}
          placeholder={tech.title}
          disabled
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          label="Status"
          id="status"
          error={errors.status?.message}
          {...register("status")}
        >
          <Option value="Iniciante" text={"Iniciante"} />
          <Option value="Intermediário" text={"Intermediário"} />
          <Option value="Avançado" text={"Avançado"} />
        </select>
        <div>
          <button type="submit">Salvar alterações</button>
          <button
            onClick={() => {
              handleDeleteTech(techId), setIsEditOrDeleteModalOpen(false);
            }}
          >
            Excluir
          </button>
        </div>
      </form>
    </StyledModalPreviewTech>
  );
};
