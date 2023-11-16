import React from "react";
import { Grid, TextField, Button,Typography } from "@mui/material";
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
export default function ContIn() {
  return (
    <Grid item={12}>
      <Typography variant="h4" sx={{
           backgroundColor:'orange',
           ml:'11%',
           mr:'11%',
           mt:'.4em',
           mb:'.4em',
           borderRadius:'30px 30px 0px 0px',
      }}>Atributos generales</Typography>

      <TextField id="outlined" label="nombre" sx={{ margin: "10px" }} />
      <TextField
        id="outlined"
        label="precio"
        type="number"
        sx={{ margin: "10px" }}
      />
      <TextField id="outlined" label="descripcion" sx={{ margin: "10px" }} />
      <div>
        <Button variant="outlined" startIcon={<CloudUploadIcon />}>
          Subir imagen
          <VisuallyHiddenInput type="file" />
        </Button>
      </div>

      <Grid item={12}>
        <Button variant="outlined" color="success" sx={{ mt: 3, mb: 4 }}>
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
}
