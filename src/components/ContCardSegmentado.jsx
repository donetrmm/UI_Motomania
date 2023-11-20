import React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import styles from '../styles/Components.module.css'
import Cards from "./Cards";
export default function ContCardSegmentado({casco}) {
    const card = casco;
  return (
    <>
      <Grid
        item={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
  
  <Cards 
        card={card}
        />
     
      </Grid>
    </>
  );
}
