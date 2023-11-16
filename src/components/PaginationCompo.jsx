import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const tema = createTheme({
  palette: {
    primary: {
      main: "#FFA424",
    },
    black: {
      main: "#070503",
    },
  },
});
export default function PaginationCompo() {
  return (
    <>
      <ThemeProvider theme={tema}>
        <Stack spacing={2} sx={{display:'flex',alignItems:'center',mb:'2.2em'}}> 
          <Pagination count={10} color="primary" />
        </Stack>
      </ThemeProvider>
    </>
  );
}
