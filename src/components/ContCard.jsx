import React from 'react'
import { Grid } from "@mui/material";
import Cards from './Cards';
export default function ContCard({card}) {
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
  )
}
