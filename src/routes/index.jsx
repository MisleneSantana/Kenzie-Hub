import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";

export const RoutesMain = ({ toast }) => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register toast={toast} />} />
      <Route path="/home" element={<Dashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
