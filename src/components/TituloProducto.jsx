import React from 'react'
import { Typography } from '@mui/material'
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
        main: "#FFA424",
    },
    black: {
      main: "#070503",
    },
  },
  typography: {
    fontFamily: ["Architects Daughter", "cursive  "].join(","),
  },
});

export default function TituloProducto({titProducto}) {
  if(titProducto === 'equipo_personal'){
    titProducto = 'equipo personal'
  }
  return (
    <>
    <ThemeProvider theme={theme}>
    <Typography variant="h2" gutterBottom
      sx={{
        bgcolor: `primary.main`,
        border:"1px primary.main",
        borderRadius:"0px 40px 0px 0px",
        width:"40%",
        mt:'3em',
        textTransform:'uppercase',
        paddingLeft:"24px",
        '@media (max-width: 900px)': {
          width:"60%",
          fontSize:'40px',
          mt:'5em'
        },
        '@media (max-width: 400px)': {
          width:"60%",
          fontSize:'30px',
        
        },




      }}
      >
        {titProducto}
      </Typography>
    </ThemeProvider>
      
    </>
  )
}
