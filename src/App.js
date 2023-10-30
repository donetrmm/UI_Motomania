import React from "react";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Probar from "./pages/Probar";
import HomeAdmin from "./pages/admin/HomeAdmin";
import AgregarProductos from "./pages/admin/AgregarProductos";
import AdministrarProductos from "./pages/admin/AdministrarProductos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prueba" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/pro" element={<Probar />} />
          <Route path="/HomeAdmin" element={<HomeAdmin />} />
          <Route path="/AgregarProductos" element={<AgregarProductos />} />
          <Route path="AdministrarProductos" element={<AdministrarProductos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
