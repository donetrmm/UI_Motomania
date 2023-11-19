import React from "react";
import { Typography } from "@mui/material";
export default function TituloCards({nombre}) {
  return (
    <>
      <Typography gutterBottom variant="h4">
        {nombre}
      </Typography>
      
    </>
  );
}
