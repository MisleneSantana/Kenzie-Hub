import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = ({ user, setUser, toast }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} toast={toast} />}></Route>
      <Route path="/register" element={<Register toast={toast} />}></Route>
      <Route path="/home" element={<Dashboard user={user} />}></Route>
    </Routes>
  );
};
