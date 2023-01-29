import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Classroom from "../pages/Classroom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import "../pages/Pages.scss";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="classroom" element={<Classroom />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/join" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
