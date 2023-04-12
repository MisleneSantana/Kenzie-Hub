import { GlobalReset } from "./styles/reset";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledPageContainer } from "./styles/style";
import { UserProvider } from "./providers/UserProvider";
import { RoutesMain } from "./routes/index";

function App() {
  // const localStorageUserToken = localStorage.getItem("@TOKEN"); //Para uso futuro
  // const localStorageUserId = localStorage.getItem("@USERID");  //Para uso futuro
  // console.log(localStorageUserToken, localStorageUserId);

  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      <ToastContainer position="top-right" theme="dark" limit={1} />
      <StyledPageContainer>
        <UserProvider>
          <RoutesMain />
        </UserProvider>
      </StyledPageContainer>
    </>
  );
}

export default App;
