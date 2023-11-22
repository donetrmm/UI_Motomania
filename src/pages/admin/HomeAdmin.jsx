import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavBarAdmin from './../../components/admin/NavBarAdmin'
import TituloAdmin from "../../components/TituloAdmin";
import MenuAdmin from "../../components/MenuAdmin";

const tit1 = "Administrar Motomanía";
const productos = "Productos Motomanía";
const promos = "Promociones Motomanía";

const cards = [
  {
    nombre: "Agregar",
    url: "https://cdn-icons-png.flaticon.com/128/4503/4503700.png",
    link: "/AgregarProductos",
  },
  {
    nombre: "Administrar",
    url: "https://cdn-icons-png.flaticon.com/128/860/860814.png",
    link: "/AdministrarProductos",
  },
];

const producTit = "Productos Motomanía";

const cardsPromo = [
  {
    nombre: "Agregar",
    url: "https://cdn-icons-png.flaticon.com/128/4503/4503700.png",
    link: "/AgregarPromos",
  },
  {
    nombre: "Administrar",
    url: "https://cdn-icons-png.flaticon.com/128/860/860814.png",
    link: "/AdministrarPromos",
  },
];

const producPromo = "Promociones Motomanía";

const HomeAdmin = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("token") !== null;
    setAuthenticated(isAuthenticated);

    if (!isAuthenticated) {
      navigate("/IniciarSesion");
    }
  }, [navigate]);

  return (
    <>
      <NavBarAdmin />
      <main>
        <TituloAdmin titulo={tit1} />
        {authenticated && (
          <>
            <MenuAdmin encabezado={productos} cards={cards} titulo={producTit} />
            <MenuAdmin encabezado={promos} cards={cardsPromo} titulo={producPromo} />
          </>
        )}
      </main>
    </>
  );
};

export default HomeAdmin;
