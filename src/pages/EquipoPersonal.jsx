import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TituloProducto from "../components/TituloProducto";
import ContProductos from "../components/ContProductos";
import Footer from "../components/Footer";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const tema = createTheme({
  palette: {
    primary: {
      main: "#FFA424",
    },
    black: {
      main: "#070503",
    },
  },
});
const equipo = 'Equipo Personal'
export default function EquipoPersonal() {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/productos/categorias/equipo_personal?page=${currentPage}&limit=6`
        );

        const data = response.data;
        const productos = data.productos || [];
        setProductos(productos);
        setTotalPages(data.totalPages || 0);
        console.log("productos de la db", productos);
      } catch (error) {
        console.error("Error al obtener los elementos", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Navbar />
      <main>
        <TituloProducto titProducto={equipo} />
        <ContProductos cards={productos} />
        <>
          <ThemeProvider theme={tema}>
            <Stack
              spacing={2}
              sx={{ display: "flex", alignItems: "center", mb: "2.2em" }}
            >
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>
          </ThemeProvider>
        </>
        <Footer />
      </main>
    </>
  )
}
