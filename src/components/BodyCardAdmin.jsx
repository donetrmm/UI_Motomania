import React from 'react'
import { CardContent } from '@mui/material'
import IconMenuAdmin from './IconMenuAdmin'
import TituloMenuAdmin from './TituloMenuAdmin'
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const tema = createTheme({
  typography: {
    fontFamily: ["Architects Daughter", "cursive  "].join(","),
  },
});
export default function BodyCardAdmin({card}) {
  return (
    <>
    <ThemeProvider theme={tema}>
      <CssBaseline>
      <CardContent>
        <TituloMenuAdmin nombre={card.nombre} />
        <IconMenuAdmin url={card.url} nombre={card.nombre} />
    </CardContent>
      </CssBaseline>
    </ThemeProvider>
    </>
  )
}
