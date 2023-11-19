import React from "react";
import { Grid,Button } from "@mui/material";
import SelectProduc from "./admin/SelectProduc";
import Pruebasss from "./Pruebasss";
import ContIn from "./ContIn";
export default function ContAgregar() {
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
          marginTop:"20px",
          marginBottom:'2em',
          flexDirection:'column'
        }}
      >
      <Pruebasss />
      
      
      </Grid>
    </>
  );
}
