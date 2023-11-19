import React from 'react'
import { CardContent } from '@mui/material'
import ImgCards from './ImgCards'
import TituloCards from './TituloCards'
import AtributosCards from './AtributosCards'
import TitulosGeneralProduct from './TitulosGeneralProduct'
import { createTheme, ThemeProvider } from "@mui/material/styles";
const tema = createTheme({
  typography: {
    fontFamily: ["Azeret Mono", "monospace  "].join(","),
  },
});
export default function BodyCards({card}) {
  return (
    <>
    <ThemeProvider theme={tema}>
    <CardContent>
        <ImgCards url={card.url_imagen} nombre={card.modelo}/>    
        <TitulosGeneralProduct modelo={card.modelo} marca={card.marca} codigo={card.codigo} />
    </CardContent>
    </ThemeProvider>
  
    </>
  )
}
