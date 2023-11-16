import React from "react";
import Titulo from "./Titulo";
import Subtitulo from "./Subtitulo";
import TituloHash from "./TituloHash";
import styles from "./../styles/Components.module.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
export default function Presentacion({ titulo, subtitulo, titulohash }) {
  const temaF = createTheme({
    typography: {
      fontFamily: ["Azeret Mono", "monospace  "].join(","),
    },
  });
  return (
    <ThemeProvider theme={temaF}>
      <CssBaseline>
        <div className={styles.containerPresentacion}>
          <Titulo titulo={titulo} />
          <Subtitulo subtitulo={subtitulo} />
          <TituloHash titulohash={titulohash} />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}
