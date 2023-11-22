import React from "react";
import { Typography } from "@mui/material";

export default function TextoEncabezado3({ encabezado }) {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
            backgroundColor:"orange",
            borderRadius: "0px 30px 0px 0px",
            fontSize:'50px',
            textAlign:'start',
            
            '@media (min-width:50px)': {
              fontSize: 18,
              width:'60%',
              pl:'1.2em'
            },
            '@media (min-width:200px)': {
                fontSize: 20,
                width:'60%',
                pl:'1.2em'
              },
            '@media (min-width:360px)': {
              fontSize: 28,
              width:'70%',
              pl:'1.2em'
            },
            '@media (min-width:550px)': {
                fontSize: 35,
                width:'50%',
                pl:'1em'
              },
              '@media (min-width:600px)': {
                fontSize: 40,
                width:'55%',
                pl:'1em'
              },
            '@media (min-width:910px)': {
              fontSize: 50,
              width:'50%',
              pl:'1em'
             
            },
          }}
      >
        {encabezado}
      </Typography>
    </>
  );
}
