import React from "react";
import { Grid, Typography} from "@mui/material";
import ContAdminCard from "./ContAdminCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EncabezadoLeft from './../components/admin/EncabezadoLeft'

const tema = createTheme({
  typography: {
    fontFamily: ["Azeret Mono", "monospace  "].join(","),
    palette: {
      primary: {
        main: "#070503",
      },
      orange: {
        main: "#FFA424",
      },
    },
  },
});
export default function MenuAdmin({ cards,encabezado }) {
  return (
    <>
    <ThemeProvider theme={tema}>
    <EncabezadoLeft encabezado={encabezado} />
    </ThemeProvider>

      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop:'-30px',
          paddingBottom:"20px",
          marginTop: "10px",
          marginBottom: "20px",

        }}
      >
        
        <>
          {cards.map((card) => (
            <ContAdminCard card={card} />
          ))}
        </>
      </Grid>
    </>
  );
}
