import {StyledLoginPageContainer} from "./style";
import { Header } from "../../../src/components/Header";
import { StyledMainContainer } from "./style";
import { FormLogin } from "../../components/FormLogin";
import { FormLoginProvider } from "../../providers/FormLoginProvider";

export const Login = () => {
  return (
    <>
      <StyledLoginPageContainer>
        <Header />
        <StyledMainContainer>
          <FormLoginProvider>
            <FormLogin />
          </FormLoginProvider>
        </StyledMainContainer>
      </StyledLoginPageContainer>
    </>
  );
};
