import { StyledContainerTech } from "./style";

export const CardTech = ({ tech }) => {
  return (
    <StyledContainerTech>
      <h3>{tech.title}</h3>
      <small>{tech.status}</small>
    </StyledContainerTech>
  );
};
