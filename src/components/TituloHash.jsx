import React from "react";
import { Typography } from "@mui/material";
export default function TituloHash({ titulohash }) {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          marginBottom: "20px",
          marginTop: "20px",
          "@media screen and (min-width: 50px)": {
            fontSize: "10px",
          },
          "@media screen and (min-width: 400px)": {
            fontSize: "23px",
          },
          "@media screen and (min-width: 720px)": {
            fontSize: "40px",
          },
          "@media screen and (min-width: 1280px)": {
            fontSize: "50px",
          },
        }}
      >
        {titulohash}
      </Typography>
    </>
  );
}
