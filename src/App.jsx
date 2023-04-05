import { GlobalReset } from "./styles/reset";
import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes/index";
import { useState } from "react";
import { StyledPageContainer } from "./styles/style";

function App() {
  const localStorageUserToken = localStorage.getItem("@TOKEN");
  const localStorageUserId = localStorage.getItem("@USERID");
  // console.log(localStorageUserToken, localStorageUserId);

  const [user, setUser] = useState("");

  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      <StyledPageContainer>
        <RoutesMain user={user} setUser={setUser} />
      </StyledPageContainer>
    </>
  );
}

export default App;
