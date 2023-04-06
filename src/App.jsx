import { GlobalReset } from "./styles/reset";
import { GlobalStyle } from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { StyledPageContainer } from "./styles/style";
import { RoutesMain } from "./routes/index";

function App() {
  // const localStorageUserToken = localStorage.getItem("@TOKEN"); //Para uso futuro
  // const localStorageUserId = localStorage.getItem("@USERID");  //Para uso futuro
  // console.log(localStorageUserToken, localStorageUserId);

  const [user, setUser] = useState("");

  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      <ToastContainer position="top-right" theme="dark" limit={1} />
      <StyledPageContainer>
        <RoutesMain user={user} setUser={setUser} toast={toast} />
      </StyledPageContainer>
    </>
  );
}

export default App;
