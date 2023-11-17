import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, TextField, Button, Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
export default function ContAgregarPromos() {
  const [imagen, setImagen] = useState(null);
  const [id_nombre_promocion, setId_nombre_promocion] = useState(null);

  const handleFotoChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const agregarPromo = async (e) => {
    console.log("cargo image");
    e.preventDefault();

    const formData = new FormData();
    formData.append("imagen", imagen);
    formData.append("id_nombre_promocion", id_nombre_promocion);

    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InVzdWFyaW8iOiJ1c3VhcmlvMiIsImlkIjoiNjU1Mjc3OTQwYTg3YTZlNDY3NTFhNTMyIn0sImlhdCI6MTcwMDE1MTk0NywiZXhwIjoxNzAwMTU5MTQ3fQ.duigsQ6SaAgfijUOTqsJDMJXzwIxwF-X7fh96SkvOzk", // Reemplaza con tu token
    };

    try {
      await axios.post(`http://localhost:8081/promociones`, formData, {
        headers,
      });
      alert("agregado correctamente");
    } catch (error) {
      console.log("errroooor");
      console.error("Error al editar la promo:", error);
    }
  };
  return (
    <>
      <Grid
      item={12}
      sx={{
        display:'flex',
        justifyContent:'center',
        width:'100%'
      }}
      >
        <Grid
          item={6}
          sx={{
            border: "1px solid",
            width:'14em',
            height:'16em',
            padding:'10px',
            '@media (min-width:400px)': {
              width:'25em',
              padding:'5px'

            },
          }}
        >
          <form onSubmit={agregarPromo}>
            <TextField
              id="outlined"
              label="Nombre de la Promocion"
              value={id_nombre_promocion}
              onChange={(e) => setId_nombre_promocion(e.target.value)}
              sx={{ margin: "10px" }}
            />
            <div>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Subir Imagen
                <input
                  type="file"
                  onChange={handleFotoChange}
                  style={{ display: "none" }}
                />
              </Button>
            </div>

            <Grid item={12}>
              <Button
                type="submit"
                variant="outlined"
                color="success"
                sx={{ mt: 3, mb: 4 }}
              >
                Guardar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
