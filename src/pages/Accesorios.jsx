import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TituloProducto from "../components/TituloProducto";
import ContProductos from "../components/ContProductos";
import Footer from "../components/Footer";
import PaginationCompo from "../components/PaginationCompo";
import axios from "axios";
const accesorios = 'Accesorios'

export default function Accesorios() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8081/productos/categorias/accesorios`
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
        <TituloProducto titProducto={accesorios} />
        <ContProductos cards={productos} />
        <PaginationCompo />
        <Footer />
      </main>
    </>
  )
}
