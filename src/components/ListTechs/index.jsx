import { CardTech } from "./CardTech";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import ButtonModal from "../../assets/img/Modal.svg";
import {
  StyledContainerSectionTechs,
  StyledContainerTitle,
  StyledContainerTechList,
} from "./style";

export const ListTechs = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledContainerSectionTechs>
      <StyledContainerTitle>
        <h3>Tecnologias</h3>
        <img src={ButtonModal} alt="button-plus"></img>
      </StyledContainerTitle>
      <StyledContainerTechList>
        {user.techs.map((tech) => (
          <CardTech key={tech.id} tech={tech} />
        ))}
      </StyledContainerTechList>
    </StyledContainerSectionTechs>
  );
};
