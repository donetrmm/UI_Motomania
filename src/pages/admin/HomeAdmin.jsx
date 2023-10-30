import React from 'react'
import Navbar from '../../components/Navbar'
import TituloAdmin from '../../components/TituloAdmin'
import MenuAdmin from '../../components/MenuAdmin'
const tit1 = 'Administrar Motomania'
const cards = [
  {
    nombre: "Agregar",
    url: "https://cdn-icons-png.flaticon.com/128/4503/4503700.png",
    link:"/AgregarProductos"
    
  },
  {
    nombre: "Editar",
    url: "https://cdn-icons-png.flaticon.com/128/860/860814.png",
    link:"/pro"
  },
];
const producTit = 'Productos Motomania'

const cardsPromo = [
  {
    nombre: "Agregar",
    url: "https://cdn-icons-png.flaticon.com/128/4503/4503700.png",
    link:"/"
    
  },
  {
    nombre: "Editar",
    url: "https://cdn-icons-png.flaticon.com/128/860/860814.png",
    link:"/pro"
  },
];
const producPromo = 'Promociones Motomania'
export default function HomeAdmin() {
  return (
    <>
    <Navbar />
    <main>
    <TituloAdmin titulo={tit1} />
    <MenuAdmin cards={cards} titulo={producTit}/>
    <MenuAdmin cards={cardsPromo} titulo={producPromo}/>
    </main>
   
    </>
  )
}
