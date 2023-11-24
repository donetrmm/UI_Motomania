import React from "react";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Probar from "./pages/Probar";
import HomeAdmin from "./pages/admin/HomeAdmin";
import AgregarProductos from "./pages/admin/AgregarProductos";
import AdministrarProductos from "./pages/admin/AdministrarProductos";
import AdministrarPromos from "./pages/admin/AdministrarPromos";
import AgregarPromos from "./pages/admin/AgregarPromos";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Intento from "./pages/admin/Intento";
import Maletas from "./pages/Maletas";
import Accesorios from "./pages/Accesorios";
import EquipoPersonal from "./pages/EquipoPersonal";
import Llantas from "./pages/Llantas";
import Cascos from "./pages/Cascos";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prueba" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/maletas" element={<Maletas />} />
          <Route path="/accesorios" element={<Accesorios />} />\
          <Route path="/equipo-personal" element={<EquipoPersonal />} />
          <Route path="/llantas" element={<Llantas />} />
          <Route path="/cascos" element={<Cascos />} />
          <Route path="/pro" element={<Probar />} />
          <Route path="/HomeAdmin" element={<HomeAdmin />} />
          <Route path="AgregarProductos" element={<AgregarProductos />} />
          <Route path="AdministrarProductos" element={<AdministrarProductos />} />
          <Route path="AgregarPromos" element={<AgregarPromos />} />
          <Route path="AdministrarPromos" element={<AdministrarPromos />} />
          <Route path="IniciarSesion" element={<Login />} />
          <Route path="RegistrarUsuario" element={<Register />} />
          <Route path="Intento" element={<Intento />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
