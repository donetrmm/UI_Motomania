import React from "react";
import { Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextoEncabezado3 from "./TextoEncabezado3";
const tema = createTheme({
  typography: {
    fontFamily: ["Azeret Mono", "monospace  "].join(","),
  },
});
export default function EncabezadoLeft({ encabezado }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          mt:'40px',
          mb:'40px'
        }}
      >
        <ThemeProvider theme={tema}>
            <TextoEncabezado3 encabezado={encabezado} />
        </ThemeProvider>
      </Box>
    </>
  );
}
