import React from "react";
import { TextField } from "@mui/material";
export default function InputPasswd({ password, setPassword }) {
  return (
    <>
      <TextField
        label="Contraseña"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        sx={{ margin: "10px" }}
      />
    </>
  );
}
    