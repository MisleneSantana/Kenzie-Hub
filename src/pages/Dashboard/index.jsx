import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { StyledDashboardContainer } from "./style";
import { StyledHeaderDashboardPageContainer } from "./style";
import { StyledMainDashboardContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Dashboard = () => {
  const { user } = useContext(UserContext);

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
          {user ? (
            <section>
              <p>Olá, {user.name[0].toUpperCase() + user.name.substring(1)}</p>
              <p>{user.course_module}</p>
            </section>
          ) : null}

          <section>
            <p>Que pena, estamos em desenvolvimento :(</p>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </section>
        </StyledMainDashboardContainer>
      </StyledDashboardContainer>
    </>
  );
};
