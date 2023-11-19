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
import { BrowserRouter, Routes, Route } from "react-router-dom";

const cards = [
  {
    id: '1',
    nombre: "Casco",
    url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
    atributos: ["atributo 1", "atributo 2", "atributo 3"],
  },
  {
    id: '2',
    nombre: "Casco222",
    url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
    atributos: ["atributo 11", "atributo 22", "atributo 33"],
  },
];

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prueba" element={<Home />} />
          <Route path="/productos" element={<Productos cards={cards}/>} />
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
