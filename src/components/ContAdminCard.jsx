import React from 'react'
import { Grid } from "@mui/material";
import CardAdmin from './CardAdmin';
export default function ContAdminCard({card}) {
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
     <CardAdmin card={card} />
    </Grid>
    </>
  )
}
