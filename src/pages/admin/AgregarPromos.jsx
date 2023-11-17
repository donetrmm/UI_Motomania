import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./../../components/Navbar";
import AddPromos from "./../../components/admin/AddPromos";

const AgregarPromos = () => {
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
        {authenticated && <AddPromos />}
      </main>
    </>
  );
};

export default AgregarPromos;
