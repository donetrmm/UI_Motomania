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
});
export default function TituloProducto({titProducto}) {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Typography variant="h2" gutterBottom
      sx={{
        bgcolor: `primary.main`,
        marginTop:"30px",
        marginBottom:"30px",
        border:"1px primary.main",
        borderRadius:"0px 40px 0px 0px",
        width:"40%",
        paddingLeft:"24px",
        '@media (max-width: 530px)': {
          width:"60%"
        },

      }}
      >
        {titProducto}
      </Typography>
    </ThemeProvider>
      
    </>
  )
}
