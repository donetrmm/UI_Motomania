import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PruebaAdmin from '../../components/PruebaAdmin';
import Navbar from '../../components/Navbar';

const AdministrarProductos = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('token') !== null;
    setAuthenticated(isAuthenticated);

    if (!isAuthenticated) {
      navigate('/IniciarSesion');
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      {authenticated && <PruebaAdmin />}
    </>
  );
};

export default AdministrarProductos;
