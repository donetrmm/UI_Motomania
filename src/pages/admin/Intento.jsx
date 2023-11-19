import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Intento() {
    const miVariableRecibida = localStorage.getItem('miVariable');
  
  return (
    <div>
    <h1>Componente Destino</h1>
    <p>Variable recibida: {miVariableRecibida}</p>

   
  </div>
  )
}
