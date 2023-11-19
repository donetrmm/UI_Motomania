import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mapa from "../components/Mapa";
import NavBarAdmin from "../components/admin/NavBarAdmin";
import Intento from './admin/Intento';
export default function Probar() {
  const handleClick = (variable) => {
    // Almacenar la variable en localStorage
    localStorage.setItem('miVariable', variable);
    window.location = '/Intento';
  };
  return (
    <>
    <div>

    <button onClick={() => handleClick('Valor del Botón 1')}>
        Enviar Variable - Botón 1
      </button>

      
    </div>
    </>
  );
}
