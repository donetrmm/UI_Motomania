import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TituloProducto from "../components/TituloProducto";
import ContProductos from "../components/ContProductos";
import Footer from "../components/Footer";
import PaginationCompo from "../components/PaginationCompo";
import axios from "axios";
const maletas = 'Maletas'
export default function Maletas() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8081/productos/categorias/maletas`
            );
    
            const productos = response.data.productos || [];
            setProductos(productos);
            console.log("productos de la db", productos);
          } catch (error) {
            console.error("Error al obtener los elementos", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <>
      <Navbar />
      <main>
        <TituloProducto titProducto={maletas} />
        <ContProductos cards={productos} />
        <PaginationCompo />
        <Footer />
      </main>
    </>
  )
}
