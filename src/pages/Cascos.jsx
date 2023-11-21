import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TituloProducto from "../components/TituloProducto";
import TituloProductoTalla from "../components/TituloProductoTalla";
import Footer from "../components/Footer";
import PaginationCompo from "../components/PaginationCompo";
import ContCardSegmentado from "../components/ContCardSegmentado";
import axios from "axios";
import { Grid } from "@mui/material";
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
const cascos = "Cascos";
export default function Cascos() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/productos/categorias/cascos`
        );
        console.log("segun productos", response.data.productos);

        const productos = response.data.productos || [];
        setProductos(productos);
        console.log("productos de la db", productos);
      } catch (error) {
        console.error("Error al obtener los elementos", error);
      }
    };

    fetchData();
  }, []);
  const cascosOrdenadosPorTalla = productos.sort((a, b) =>
    a.talla.localeCompare(b.talla)
  );
  const cascosPorTalla = cascosOrdenadosPorTalla.reduce((acc, casco) => {
    acc[casco.talla] = acc[casco.talla] || [];
    acc[casco.talla].push(casco);
    return acc;
  }, {});
  return (
    <>
      <Navbar />
      <main>
        <TituloProducto titProducto={cascos} />
        <div>
          <div>
            {Object.keys(cascosPorTalla).map((talla) => (
              <>
                <div>
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
                    <>
                      {cascosPorTalla[talla].map((casco) => (
                        <ContCardSegmentado casco={casco} />
                      ))}
                    </>
                  </Grid>
                </div>
              </>
            ))}
          </div>
        </div>
        <>
          <ThemeProvider theme={tema}>
            <Stack
              spacing={2}
              sx={{ display: "flex", alignItems: "center", mb: "2.2em" }}
            >
              <Pagination count={10} color="primary" />
            </Stack>
          </ThemeProvider>
        </>
        <Footer />
      </main>
    </>
  );
}
