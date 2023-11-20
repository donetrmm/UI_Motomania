import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TituloProducto from "../components/TituloProducto";
import ContProductos from "../components/ContProductos";
import Footer from "../components/Footer";
import PaginationCompo from "../components/PaginationCompo";
import axios from "axios";

const titProducto = "Cascos";
export default function Productos({ itemId, algo }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [productos, setProductos] = useState([]);

  const [cont, setCont] = useState([]);
  const productoRecibido = localStorage.getItem("produc");

  useEffect(() => {
    console.log("id mandado", algo);
    console.log("id SEGUN NUEVO", algo);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/productos/categorias/${productoRecibido}`
        );

        const productos = response.data || [];
        setProductos(productos);
        console.log("productos de la db", productos);
      } catch (error) {
        console.error("Error al obtener los elementos", error);
      }
    };

    fetchData();
  }, []);
  const cards = [
    {
      id: "1",
      nombre: "Casco",
      url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
      atributos: ["atributo 1", "atributo 2", "atributo 3"],
    },
    {
      id: "2",
      nombre: "Casco222",
      url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
      atributos: ["atributo 11", "atributo 22", "atributo 33"],
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <TituloProducto titProducto={productoRecibido} />
        <ContProductos cards={productos} />
        <PaginationCompo />
        <Footer />
      </main>
    </>
  );
}
