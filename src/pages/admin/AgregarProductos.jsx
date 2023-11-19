import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarAdmin from './../../components/admin/NavBarAdmin'
import ContAgregar from "./../../components/ContAgregar";

const AgregarProductos = () => {
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
        {authenticated && <ContAgregar />}
      </main>
    </>
  );
};

export default AgregarProductos;
