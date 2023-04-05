import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div>
        <Header>
          <button onClick={() => clearLocalStorage()}>Sair</button>
        </Header>
      </div>
      <section>
        <p>Olá, {user.name}</p>
        <p>{user.course_module}</p>
      </section>
      <section>
        <p>Que pena, estamos em desenvolvimento :(</p>
        <p>
          {" "}
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </section>
    </>
  );
};
