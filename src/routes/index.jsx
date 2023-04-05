import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Dashboard user={user} />}></Route>
    </Routes>
  );
};
