import { StyledContainerNotFound } from "./style";
import error from "../../assets/img/error (1).png";
export const NotFound = () => {
  return (
    <StyledContainerNotFound>
      <h1>Página não encontrada</h1>
      <img src={error} alt="error"></img>
    </StyledContainerNotFound>
  );
};
