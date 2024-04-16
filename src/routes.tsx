import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/App";
import Cliente from "./pages/Cliente/App";
import Horario from "./pages/Horario/App";
import Login from "../src/pages/TelaDeLoguin/App"; // Corrigido o nome do arquivo
import React, { useState } from "react";

// Função de verificação de autenticação simulada
function verificarAutenticacao() {
  // Substitua isso pela lógica real de verificação de autenticação
  return localStorage.getItem("token") !== null; // Corrigido para verificar se o token não é nulo
}

// Componente de rota privada
function PrivateRoute({ element, ...rest }) {
  const [autenticado, setAutenticado] = useState(verificarAutenticacao());

  console.log("Autenticado:", autenticado);

  if (!autenticado && rest.path !== "/") {
    console.log("Redirecionando para a tela de login...");
    return <Navigate to="/" replace />;
  }

  return <Route {...rest} element={element} />;
}


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Corrigido o componente importado */}
      <PrivateRoute path="/home" element={<Home />} />
      <PrivateRoute path="/cliente" element={<Cliente />} />
      <PrivateRoute path="/horario" element={<Horario />} />
    </Routes>
  );
}

export default MainRoutes;
