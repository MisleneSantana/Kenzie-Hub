import { Header } from "../../../src/components/Header";
import { StyledMainContainer } from "./style";
import { FormLogin } from "../../components/FormLogin";
import { FormLoginProvider } from "../../providers/FormLoginProvider";

export const Login = () => {
  return (
    <>
      <Header />
      <StyledMainContainer>
        <FormLoginProvider>
          <FormLogin />
        </FormLoginProvider>
      </StyledMainContainer>
    </>
  );
};
