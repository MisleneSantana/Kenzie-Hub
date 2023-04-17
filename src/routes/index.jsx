import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { RouteProtection } from "../../src/components/RouteProtection";
import { PublicRoutes } from "../components/PublicRoutes";

export const RoutesMain = ({ toast }) => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        {/* Outlet PublicRoutes: */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register toast={toast} />} />
      </Route>

      <Route element={<RouteProtection />}>
        {/* Outlet RouteProtection: */}
        <Route path="/home" element={<Dashboard />}></Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
