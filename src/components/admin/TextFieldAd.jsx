import React from "react";
import TextField from "@mui/material/TextField";
export default function TextFieldAd({ propiedades }) {
  return (
    <>
      <TextField>
        id="outlined" label={propiedades.label}
        type={propiedades.type}
        sx={{ margin: "10px" }}
      </TextField>
    </>
  );
}
