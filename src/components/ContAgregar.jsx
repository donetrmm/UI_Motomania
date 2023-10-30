import React, { useState } from "react";
import { Grid } from "@mui/material";
import Pruebasss from "./Pruebasss";

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
          border: "1px solid",
          marginTop:"20px"
        }}
      >
      <Pruebasss />
      </Grid>
    </>
  );
}
