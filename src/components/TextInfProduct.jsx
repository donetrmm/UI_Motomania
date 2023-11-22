import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
export default function TextInfProduct({
  talla,
  capacidad,
  tipo_llanta,
  rin,
  medida,
  descripcion,
  compatibilidad,
  color,
}) {
  useEffect(() => {
    if (talla) {
      console.log("talla algo", talla);
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        {talla && 
        <Typography variant="subtitle1">
            Talla:<span style={{fontWeight:'bold'}} >{talla}</span>
        </Typography>}
        {capacidad && (
          <Typography variant="subtitle1">Capacidad:<span style={{fontWeight:'bold'}} >{capacidad}</span></Typography>
        )}
        {tipo_llanta && (
          <Typography variant="subtitle1">
            Tipo de Llanta:<span style={{fontWeight:'bold'}} >{tipo_llanta}</span>
          </Typography>
        )}
        {rin && <Typography variant="subtitle1">Rin:<span style={{fontWeight:'bold'}} >{rin}</span></Typography>}
        {medida && <Typography variant="subtitle1">Medida:<span style={{fontWeight:'bold'}} >{medida}</span></Typography>}
        {descripcion && (
          <Typography variant="subtitle1">Descripción:<span style={{fontWeight:'bold'}} >{descripcion}</span></Typography>
        )}
        {compatibilidad && (
          <Typography variant="subtitle1">
            Compatibilidad:<span style={{fontWeight:'bold'}} >{compatibilidad}</span>
          </Typography>
        )}
        {color && <Typography variant="subtitle1">Color:<span style={{fontWeight:'bold'}} >{color}</span></Typography>}
      </Box>
    </>
  );
}
