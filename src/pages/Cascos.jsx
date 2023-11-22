import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TituloProducto from "../components/TituloProducto";
import TituloProductoTalla from "../components/TituloProductoTalla";
import Footer from "../components/Footer";
import ContCardSegmentado from "../components/ContCardSegmentado";
import axios from "axios";
import { Grid, Pagination } from "@mui/material";
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

const Cascos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [tallasProductos, setTallasProductos] = useState({});

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:8081/productos/search/cascos?page=${page}`
      );
      const { totalPages, totalProductos, resultadosPorTalla } = response.data;
      setCurrentPage(currentPage);
      setTotalPages(totalPages);
      setTotalProducts(totalProductos);
      setTallasProductos(resultadosPorTalla);
    } catch (error) {
      console.error("Error al obtener los elementos", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Navbar />
      <main>
        <TituloProducto titProducto="Cascos" />
        <div>
          {Object.keys(tallasProductos).map((talla) => (
            <div key={talla}>
              <TituloProductoTalla titProducto={talla} />
              <Grid
                container
                spacing={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  paddingBottom: "2em",
                  mt: "3em",
                  mb: "3em",
                }}
              >
                {tallasProductos[talla].productos.map((casco) => (
                  <ContCardSegmentado key={casco._id} casco={casco} />
                ))}
              </Grid>
            </div>
          ))}
        </div>
        <ThemeProvider theme={tema}>
          <Stack
            spacing={2}
            sx={{ display: "flex", alignItems: "center", mb: "2.2em" }}
          >
            <Pagination
              count={totalPages}
              color="primary"
              page={currentPage}
              onChange={handleChangePage}
            />
          </Stack>
        </ThemeProvider>
        <Footer />
      </main>
    </>
  );
};

export default Cascos;
