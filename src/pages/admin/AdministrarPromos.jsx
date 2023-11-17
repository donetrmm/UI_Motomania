import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './../../components/Navbar'
import AdminPromos from '../../components/admin/AdminPromos'
import EncabezadoLeft from './../../components/admin/EncabezadoLeft'
const encabezado = 'Administrar Promociones'

const AdministrarPromos = () => {
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
      <main>
        {authenticated && <EncabezadoLeft encabezado={encabezado} />}
        {authenticated && <AdminPromos />}
      </main>
    </>
  );
};

export default AdministrarPromos;