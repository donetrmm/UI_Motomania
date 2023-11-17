import React from "react";
import { Typography } from "@mui/material";

export default function TextoEncabezado3({ encabezado }) {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
            // Estilos por defecto aquí
            backgroundColor:"orange",
            borderRadius: "0px 30px 0px 0px",
            fontSize:'50px',
            textAlign:'start',
            
            '@media (min-width:50px)': {
              fontSize: 18,
              width:'60%',
              pl:'1.2em'
            },
            '@media (min-width:300px)': {
                fontSize: 30,
                width:'60%',
                pl:'1.2em'
              },
            '@media (min-width:400px)': {
              fontSize: 35,
              width:'60%',
              pl:'1.2em'
            },
            '@media (min-width:510px)': {
                fontSize: 40,
                width:'50%',
                pl:'1em'
              },
    
            // Otra media query para pantallas aún más grandes
            '@media (min-width:910px)': {
              fontSize: 50,
              width:'50%',
              pl:'1em'
             
            },
          }}
      >
        {encabezado}
      </Typography>
    </>
  );
}
