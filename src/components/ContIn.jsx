import React from 'react'
import { Grid,TextField,Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export default function ContIn() {
  return (
    <Grid item={12}>
    <h2>Atributos generales</h2>
    <TextField
              id="outlined"
              label='nombre'
              sx={{margin:'10px'}}
            />
                <TextField
              id="outlined"
              label='precio'
              type='number'
              sx={{margin:'10px'}}
            />
                <TextField
              id="outlined"
              label='descripcion'
              sx={{margin:'10px'}}
            />
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Subir imagen
      <VisuallyHiddenInput type="file" />
    </Button>
            
  </Grid>
  )
}
