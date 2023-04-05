import logo from "../../assets/img/Logo.svg";
import { StyledHeader } from "./style";

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <img src={logo} alt={logo}></img>
      <div>{children}</div>
    </StyledHeader>
  );
};
