import { CardTech } from "./CardTech";
import { useContext, useState } from "react";
import ButtonModal from "../../assets/img/Modal.svg";
import { AddModal } from "../AddModal";
import {
  StyledContainerSectionTechs,
  StyledContainerTitle,
  StyledContainerTechList,
} from "./style";
import { TechContext } from "../../providers/TechProvider";

export const ListTechs = () => {
  const { techList } = useContext(TechContext);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <StyledContainerSectionTechs>
      <StyledContainerTitle>
        <h3>Tecnologias</h3>
        <button onClick={() => setIsAddModalOpen(true)}>
          <img src={ButtonModal} alt="button-plus" />
        </button>
      </StyledContainerTitle>
      {isAddModalOpen ? (
        <AddModal setIsAddModalOpen={setIsAddModalOpen} />
      ) : null}
      <StyledContainerTechList>
        {techList.map((tech) => (
          <CardTech key={tech.id} tech={tech} />
        ))}
      </StyledContainerTechList>
    </StyledContainerSectionTechs>
  );
};
