import React from "react";
import { Typography } from "@mui/material";
export default function TituloHash({titulohash}) {
  return (
    <>
      <Typography variant="h4" gutterBottom 
      sx={{
        wordWrap:'break-word',
        textTransform: 'uppercase',
        marginBottom: '20px',
        marginTop: '20px'
      }}
      >
        {titulohash}
      </Typography>
    </>
  )
}
