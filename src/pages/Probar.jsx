import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mapa from "../components/Mapa";
import NavBarAdmin from "../components/admin/NavBarAdmin";
import Intento from './admin/Intento';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function Probar() {
  const handleClick = (variable) => {
    // Almacenar la variable en localStorage
    localStorage.setItem('miVariable', variable);
    window.location = '/Intento';
  };
  return (
    <>
    <div>

    <Mapa />
    <AcUnitIcon name="home" color="info" />
      
    </div>
    </>
  );
}
