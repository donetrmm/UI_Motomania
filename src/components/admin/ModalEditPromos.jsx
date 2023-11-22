import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

export default function ModalEditPromos({ promo, open, onClose }) {
  const [imagen, setImagen] = useState(null);

  const handleFotoChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const editarPromo = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('imagen', imagen);

    const token = sessionStorage.getItem('token');
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: token,
    };

    try {
      await axios.put(`http://localhost:8081/promociones/${promo.id_nombre_promocion}`, formData, { headers });

      onClose();
    } catch (error) {
      console.error('Error al editar la promo:', error);
    }
  };

  if (!promo) {
    return null;
  }

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={editarPromo}>
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
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          display: 'flex'
        }}>
          <Typography variant='h3' sx={{ mt: 3,mb:2 }}>
            {promo.id_nombre_promocion}
          </Typography>

          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{mt:2,mb:2}}>
            Subir Imagen
            <input type="file" onChange={handleFotoChange} style={{ display: 'none' }} />
          </Button>
          <Button type="submit" variant='contained' color='success' sx={{ mt: 2, mb: 2}}>
            Editar
          </Button>
          <Button onClick={onClose} variant="outlined" color="error" sx={{mt:2,mb:2}}>
          Cancelar
        </Button>
        </Box>
      </form>
    </Modal>
  );
}
