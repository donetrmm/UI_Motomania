import React from 'react'
import { Typography } from "@mui/material";
export default function TitulosGeneralProduct({modelo,marca,codigo}) {
  return (
    <>
       <Typography gutterBottom variant="h4">
        {modelo}
      </Typography>
      <Typography gutterBottom variant="h6">
        {marca}
      </Typography>
      <Typography gutterBottom variant="h6">
        {codigo}
      </Typography>
    </>
  )
}
