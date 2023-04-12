import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Navigate, Outlet } from "react-router-dom";
import { Loading } from "../Loading";

export const RouteProtection = () => {
  const { user, loading } = useContext(UserContext);
  // console.log(user);
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;

  // if (user) {
  //   console.log(user);
  //   return <Outlet />;
  // }

  // return <Navigate to="/" />;
};
