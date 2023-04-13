import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Navigate, Outlet } from "react-router-dom";
import { Loading } from "../Loading";
import { TechProvider } from "../../providers/TechProvider";

export const RouteProtection = () => {
  const { user, loading } = useContext(UserContext);
  // console.log(user);
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <TechProvider>
      <Outlet />
    </TechProvider>
  );
};

// if (user) {
//   console.log(user);
//   return <Outlet />;
// }

// return <Navigate to="/" />;
