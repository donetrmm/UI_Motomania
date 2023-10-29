import React from 'react'
import Navbar from '../components/Navbar'
import TituloProducto from '../components/TituloProducto'
import ContProductos from '../components/ContProductos'
const titProducto = 'Cascos'
export default function Productos() {
  return (
    <>
    <Navbar />
    <main>
    <TituloProducto titProducto={titProducto} />
    <ContProductos />
    </main>
    </>
  )
}
