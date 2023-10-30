import React from "react";
import { Grid, Typography} from "@mui/material";
import ContAdminCard from "./ContAdminCard";
export default function MenuAdmin({ cards,titulo }) {
  return (
    <>
    <Typography variant="h2" sx={{
        textAlign:"center",
        marginTop:"25px"
    }}>
        {titulo}
    </Typography>
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
          border: "1px solid",
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
