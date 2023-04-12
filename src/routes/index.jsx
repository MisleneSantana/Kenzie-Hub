import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { RouteProtection } from "../../src/components/RouteProtection";
import { TechProvider } from "../providers/TechProvider";

export const RoutesMain = ({ toast }) => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register toast={toast} />} />

      <Route element={<RouteProtection />}>
        <Route
          path="/home"
          element={
            <TechProvider>
              <Dashboard />
            </TechProvider>
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
