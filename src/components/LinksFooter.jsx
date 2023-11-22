import React from 'react'
import styles from './../styles/Components.module.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const tema = createTheme({
  palette: {
    primary: {
      main: "#FFA424",
    },
    white: {
      main: "#ffffff",
    },
  },
});
export default function LinksFooter({contactos}) {
  return (
    <>
    <ThemeProvider theme={tema}>
    {contactos.map((contacto) => (
        <a href={contacto.link} target='blank' className={styles.linkFooter}>
                <contacto.icono fontSize='large' color='primary' sx={{
                  margin:'5px',
                  transition:'1s all ease',
                  '&:hover': {
                    transform:'scale(1.4)'
                    
                    
                  },
                }} />
        </a>

    ))}
    </ThemeProvider>
    
    </>
  )
}
