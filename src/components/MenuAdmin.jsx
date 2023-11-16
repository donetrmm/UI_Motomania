import React from "react";
import { Grid, Typography} from "@mui/material";
import ContAdminCard from "./ContAdminCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const tema = createTheme({
  typography: {
    fontFamily: ["Azeret Mono", "monospace  "].join(","),
    palette: {
      primary: {
        main: "#070503",
      },
      orange: {
        main: "#FFA424",
      },
    },
  },
});
export default function MenuAdmin({ cards,titulo }) {
  return (
    <>
    <ThemeProvider theme={tema}>
    <Typography variant="h3" sx={{
        textAlign:"center",
        marginTop:"25px",
        fontSize:'40px',
        backgroundColor:'orange',
        ml:'11%',
        mr:'11%',
        mt:'1.2em',
        borderRadius:'30px 30px 0px 0px',
        '@media screen and (min-width: 400px)': {
          fontSize:'50px'
        },
    }}>
        {titulo}
    </Typography>
    </ThemeProvider>

      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop:'-30px',
          paddingBottom:"20px",
          marginTop: "10px",
          marginBottom: "20px",

        }}
      >
        
        <>
          {cards.map((card) => (
            <ContAdminCard card={card} />
          ))}
        </>
      </Grid>
    </>
  );
}
