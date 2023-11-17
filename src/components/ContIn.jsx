import React from "react";
import { Grid, TextField, Button,Box } from "@mui/material";
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
    <Grid item={4} sx={{
      display:'flex',
      flexDirection:'column'
    }}>
      <Box>
      <TextField id="outlined" label="Codigo" sx={{ margin: "10px" }} />
      <TextField
        id="outlined"
        label="Modelo"
        sx={{ margin: "10px" }}
      />
      </Box>
      
      
      <Grid>
      <TextField id="outlined" label="marca" sx={{ margin: "10px" }} />
      </Grid>


    </Grid>
  );
}
