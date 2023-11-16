import React from 'react'
import { Typography,Box} from '@mui/material'
import { createTheme, ThemeProvider } from "@mui/material/styles";
const tema = createTheme({
  typography: {
    fontFamily: ["Azeret Mono", "monospace  "].join(","),
  },
});
export default function TituloAdmin({titulo}) {
  return (
    <>
    <ThemeProvider theme={tema}>
    <Box sx={{
      display:'flex',
      overflow:'hidden',
      justifyContent:'center'
    }}>
    <Typography variant="h2" gutterBottom sx={{
      textAlign:'center', 
      wordWrap:'break-word',
      textTransform:'uppercase',
      mt:'.5em',
      fontSize:'50px',
      '@media screen and (min-width: 400px)': {
        fontSize:'60px'
      },
      }}>
        {titulo}
    </Typography>
    </Box>
    </ThemeProvider>
  

    </>
  )
}
