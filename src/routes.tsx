import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/App";
import Cliente from "./pages/Cliente/App";
import Horario from "./pages/Horario/App";
import React from "react";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/horario" element={<Horario />} />
    </Routes>
  );
}

export default MainRoutes;
