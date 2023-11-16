import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar'
import TituloProducto from '../components/TituloProducto'
import ContProductos from '../components/ContProductos'
import Footer from '../components/Footer'
import PaginationCompo from '../components/PaginationCompo'

const titProducto = 'Cascos'
export default function Productos({cards}) {
  const { id } = useParams();
  const tarjeta = cards.find((card) => card.id === id);
  
  return (
    <>
    <Navbar/>
    <main>
    <TituloProducto titProducto={titProducto} />
    <ContProductos cards={cards} />
    <PaginationCompo />
    {tarjeta ? (
        <div>
          <h2>{tarjeta.nombre}</h2>
          <img src={tarjeta.url} alt={tarjeta.nombre} width="20%" />
          <ul>
            {tarjeta.atributos.map((atributo, index) => (
              <li key={index}>{atributo}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Tarjeta no encontrada</p>
      )}
    <Footer />
    </main>
    </>
  )
}
/*
*/ 
