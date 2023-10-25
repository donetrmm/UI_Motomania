import React from "react";
import { Typography } from "@mui/material";
export default function Titulo({ titulo }) {
  return (
    <>
      <Typography variant="h2" gutterBottom 
      sx={{
        wordWrap:'break-word',
        textTransform: 'uppercase',
        marginBottom: '20px',
        marginTop: '20px'
      }}
      >
        {titulo}
      </Typography>
    </>
  );
}
