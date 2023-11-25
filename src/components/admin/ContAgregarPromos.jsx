import React, { useState } from "react";
import axios from "axios";
import { Grid, TextField, Button,Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

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
      toast.success('Promoción agregada')
      // Redirige a la página de administración de promociones
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
        width: "80%",
        paddingRight:'2em',
        marginLeft:'2em',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius:'15px'
      }}
    >
            <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
      <Grid item={12} >
        <form onSubmit={agregarPromo}>
          <Grid
            sx={{
              display: { xs: 'column', md: 'flex' },
              alignItems: "center",
              justifyContent:'center'
            }}
          >
            <TextField
              id="outlined"
              label="Nombre de la Promoción"
              value={idNombrePromocion}
              onChange={(e) => setIdNombrePromocion(e.target.value)}
              sx={{ margin: "1em" }}
            />
            <Box> 
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{ margin: "1em",height:'56px' }}
            >
              Subir Imagen
              <input
                type="file"
                onChange={handleFotoChange}
                style={{ display: "none" }}
              />
            </Button>

            </Box>
  
          </Grid>

          <Grid item={12} sx={{m:"10px"}}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 4,fontSize:'20px' }}
            >
              Agregar Promoción
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
