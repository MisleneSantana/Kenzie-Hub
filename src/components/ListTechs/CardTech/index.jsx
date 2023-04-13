import { StyledContainerTech } from "./style";
import { EditOrDeleteModal } from "../../EditOrDeleteModal";
import { useState } from "react";

export const CardTech = ({ tech }) => {
  const [isEditOrDeleteModalOpen, setIsEditOrDeleteModalOpen] = useState(false);

  return (
    <>
      <StyledContainerTech onClick={() => setIsEditOrDeleteModalOpen(true)}>
        <h3>{tech.title}</h3>
        <small>{tech.status}</small>
      </StyledContainerTech>
      {isEditOrDeleteModalOpen ? (
        <EditOrDeleteModal
          tech={tech}
          setIsEditOrDeleteModalOpen={setIsEditOrDeleteModalOpen}
        />
      ) : null}
    </>
  );
};
