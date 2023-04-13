import { Header } from "../../components/Header";
import { Navigate, useNavigate } from "react-router-dom";
// import { Loading } from "../../components/Loading";
import { StyledDashboardContainer } from "./style";
import { StyledHeaderDashboardPageContainer } from "./style";
import { StyledMainDashboardContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { ListTechs } from "../../components/ListTechs";

export const Dashboard = () => {
  const { user, techList } = useContext(UserContext);
  // console.log(user.techs)
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
            {/* <p>Olá, {user.name[0].toUpperCase() + user.name.substring(1)}</p> */}
            <p>Olá, {user.name}</p>
            <p>{user.course_module}</p>
          </section>
          {user ? (
            <section>
              <ListTechs />
            </section>
          ) : null}
        </StyledMainDashboardContainer>
      </StyledDashboardContainer>
    </>
  );
};

/* <section>
<p>Que pena, estamos em desenvolvimento :(</p>
<p>
  Nossa aplicação está em desenvolvimento, em breve teremos
  novidades
</p>
</section> */
