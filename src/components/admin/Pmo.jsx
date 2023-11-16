import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
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
export default function Pmo({ product, open, onClose }) {
    if (!product) {
        return null; // Si no hay producto seleccionado, no renderizar el modal
      }
  return (
<Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        display:"flex"
      }}>
        <Typography variant='h4' sx={{ mt: 2 }}>
          {product.name}
        </Typography>
        {product.propiedades.map((propiedad) =>(
              <TextField
              id="outlined"
              label={propiedad.label}
              type={propiedad.type}
              sx={{
                margin:'10px'
              }}
            />
        ))}
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
      Subir Imagen
      <VisuallyHiddenInput type="file" />
    </Button>
      <Button variant='contained' color='success' sx={{mt:'10px',mb:'10px'}}>
        Editar
      </Button>
      </Box>
    </Modal>
  )
}
