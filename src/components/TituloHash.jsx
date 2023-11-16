import React from "react";
import { Typography } from "@mui/material";
export default function TituloHash({titulohash}) {
  return (
    <>
      <Typography variant="h4"  
      sx={{

        textTransform: 'uppercase',
        marginBottom: '20px',
        marginTop: '20px',
        fontSize:'20px',
        '@media screen and (min-width: 400px)': {
          fontSize:'40px'
        },
      }}
      >
        {titulohash}
      </Typography>
    </>
  )
}
