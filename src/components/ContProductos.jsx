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
           paddingBottom:'2em',
           border:'1px solid',
           mt:'3em',
           mb:'3em'   
 
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
