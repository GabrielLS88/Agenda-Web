import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/App";
import Cliente from "./pages/Cliente/App";
import Horario from "./pages/Horario/App";
import Login from "./pages/TelaDeLoguin/App";
import React, { useState, useEffect } from "react";

function verificarAutenticacao() {
  return localStorage.getItem("token") !== null;
}

function PrivateRoute({ element, ...rest }) {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    setAutenticado(verificarAutenticacao());
  }, []);

  if (!autenticado) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={element} />;
}

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/horario" element={<Horario />} />
    </Routes>
  );
}

export default MainRoutes;