import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

export default function ModalEditPromos({ promo, open, onClose }) {
  const [imagen, setImagen] = useState(null);

  const handleFotoChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const editarPromo = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('imagen', imagen);

    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InVzdWFyaW8iOiJ1c3VhcmlvMiIsImlkIjoiNjU1NDNlYTNiNGMzZmIxMWQ4YzBhZWMwIn0sImlhdCI6MTcwMDEyMzMzOCwiZXhwIjoxNzAwMTMwNTM4fQ.54sgyG4iE3NtJ9ArTSjV53SlHCaiIz8qomUtv6o5cfE', // Reemplaza con tu token
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
          <Typography variant='h4' sx={{ mt: 2 }}>
            {promo.id_nombre_promocion}
          </Typography>

          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Subir Imagen
            <input type="file" onChange={handleFotoChange} style={{ display: 'none' }} />
          </Button>
          <Button type="submit" variant='contained' color='success' sx={{ mt: '10px', mb: '10px' }}>
            Editar
          </Button>
        </Box>
      </form>
    </Modal>
  );
}
