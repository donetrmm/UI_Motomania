import React from 'react'
import Navbar from '../components/Navbar'
import TituloProducto from '../components/TituloProducto'
import ContProductos from '../components/ContProductos'
const cards = [
    {
      nombre: "Casco",
      url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
      atributos: ["atributo 1", "atributo 2", "atributo 3"],
    },
    {
      nombre: "Casco222",
      url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
      atributos: ["atributo 11", "atributo 22", "atributo 33"],
    },

  
  ];
const titProducto = 'Cascos'
export default function Productos() {
  return (
    <>
    <Navbar />
    <main>
    <TituloProducto titProducto={titProducto} />
    <ContProductos cards={cards} />
    </main>
    </>
  )
}
