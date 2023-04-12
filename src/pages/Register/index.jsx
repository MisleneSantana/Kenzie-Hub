import { StyledRegisterPageContainer } from "./style";
import { StyledHeaderRegisterPageContainer } from "./style";
import { Header } from "../../../src/components/Header";
import { Link } from "react-router-dom";
import { StyledRegisterMainContainer } from "./style";
import { FormRegisterProvider } from "../../providers/FormRegisterProvider";
import { FormRegister } from "../../components/FormRegister";

export const Register = () => {
  return (
    <>
      <StyledRegisterPageContainer>
        <StyledHeaderRegisterPageContainer>
          <Header>
            <Link to="/">Voltar</Link>
          </Header>
        </StyledHeaderRegisterPageContainer>
        <StyledRegisterMainContainer>
          <FormRegisterProvider>
            <FormRegister />
          </FormRegisterProvider>
        </StyledRegisterMainContainer>
      </StyledRegisterPageContainer>
    </>
  );
};
