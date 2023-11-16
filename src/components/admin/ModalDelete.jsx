import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function ModalDelete({ promo, open, onClose }) {
    if (!promo) {
        return null; // Si no hay promoo seleccionado, no renderizar el modal
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
        <Typography variant='h4' sx={{ mt: 2,mb:3 }}>
          {promo.id_nombre_promocion}
        </Typography>

             
            <Button variant="outlined" color='error' sx={{marginBottom:2}}>
      Eliminar {promo.id_nombre_promocion}
  
    </Button>
  
      </Box>
    </Modal>
  )
}
