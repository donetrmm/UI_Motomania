import React, { useState } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";

export default function ContAgregarPromos() {
  const navigate = useNavigate();
  const [imagen, setImagen] = useState(null);
  const [idNombrePromocion, setIdNombrePromocion] = useState("");

  const handleFotoChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const agregarPromo = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("imagen", imagen);
    formData.append("id_nombre_promocion", idNombrePromocion);

    const token = sessionStorage.getItem("token");
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    };

    try {
      await axios.post("http://localhost:8081/promociones", formData, {
        headers,
      });
      alert("Agregado correctamente");
      navigate("/AdministrarPromos"); // Redirige a la página de administración de promociones
    } catch (error) {
      console.error("Error al agregar la promoción:", error);
    }
  };

  return (
    <Grid
      item={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid
        item={6}
        sx={{
          border: "1px solid",
          width: "14em",
          height: "16em",
          padding: "10px",
          "@media (min-width:400px)": {
            width: "25em",
            padding: "5px",
          },
        }}
      >
        <form onSubmit={agregarPromo}>
          <TextField
            id="outlined"
            label="Nombre de la Promocion"
            value={idNombrePromocion}
            onChange={(e) => setIdNombrePromocion(e.target.value)}
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
  );
}
