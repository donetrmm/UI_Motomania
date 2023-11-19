import React from "react";
import { Grid } from "@mui/material";
import ContAgregarPromos from "./ContAgregarPromos";
import EncabezadoLeft from "./EncabezadoLeft";
const encabezado = 'Agregar Promociones';
export default function AddPromos() {
  return (
<>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",  
          marginTop:"20px",
          flexDirection:'column'
        }}
      >
        <EncabezadoLeft encabezado={encabezado} />
        <ContAgregarPromos />
      </Grid>
    </>
  )
}
