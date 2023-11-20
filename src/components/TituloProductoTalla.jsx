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

export default function TituloProductoTalla({titProducto}) {
  if(titProducto === 'equipo_personal'){
    titProducto = 'equipo personal'
  }
  return (
    <>
    <ThemeProvider theme={theme}>
    <Typography variant="h3" gutterBottom
      sx={{
        bgcolor: `primary.main`,
        border:"1px primary.main",
        borderRadius:"0px 40px 0px 0px",
        width:"30%",
        mt:'.8em',
        textTransform:'uppercase',
        paddingLeft:"24px",
        '@media (max-width: 530px)': {
          width:"60%",
          fontSize:'30px'
        },

      }}
      >
        Talla : {titProducto}
      </Typography>
    </ThemeProvider>
      
    </>
  )
}
