import React from "react";
import { Grid } from "@mui/material";
import ContCard from "./ContCard";
import styles from "./../styles/ejem.module.css";
export default function ContProductos({cards}) {
  return (
    <>
      <Grid 
         container
         spacing={3}
         sx={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           textAlign: "center",
           padding: "25px",
           border:'1px solid',
 
         }} 
      >
        <>
        {cards.map((card ) => (
          <ContCard 
          card={card}
          />
        ))}
        </>

      </Grid>
    </>
  );
}
