import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import TituloAdmin from "../../components/TituloAdmin";
import MenuAdmin from "../../components/MenuAdmin";

const tit1 = "Administrar Motomania";
const productos = "Productos Motomania";
const promos = "Promociones Motomania";

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

const producTit = "Productos Motomania";

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

const producPromo = "Promociones Motomania";

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
      <Navbar />
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
