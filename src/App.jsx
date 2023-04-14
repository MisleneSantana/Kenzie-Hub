import { GlobalReset } from "./styles/reset";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledPageContainer } from "./styles/style";
import { UserProvider } from "./providers/UserProvider";
import { RoutesMain } from "./routes/index";

function App() {
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
