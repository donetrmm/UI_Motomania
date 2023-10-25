import React from "react";
import { Typography } from "@mui/material";
export default function Subtitulo({subtitulo}) {
  return (
    <>
    <Typography variant="h5" gutterBottom 
    sx={{
      wordWrap:'break-word',
      marginBottom: '20px',
      marginTop: '20px'
    }}
    >
      {subtitulo}
    </Typography>
  </>
  )
}
