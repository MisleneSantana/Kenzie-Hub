import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { StyledDashboardContainer } from "./style";
import { StyledHeaderDashboardPageContainer } from "./style";
import { StyledMainDashboardContainer } from "./style";

export const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <StyledDashboardContainer>
        <StyledHeaderDashboardPageContainer>
          <Header>
            <button onClick={() => clearLocalStorage()}>Sair</button>
          </Header>
        </StyledHeaderDashboardPageContainer>
        <StyledMainDashboardContainer>
          <section>
            <p>Olá, {user.name[0].toUpperCase() + user.name.substring(1)}</p>
            <p>{user.course_module}</p>
          </section>
          <section>
            <p>Que pena, estamos em desenvolvimento :(</p>
            <p>
              {" "}
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </section>
        </StyledMainDashboardContainer>
      </StyledDashboardContainer>
    </>
  );
};
