import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function ModalDelete({ promo, open, onClose }) {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/promociones?page=1&limit=10');
        setPromociones(response.data.promociones);
      } catch (error) {
        console.error('Error al obtener los elementos', error);
      }
    };
    fetchData();
  }, []);

  const deletePromo = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InVzdWFyaW8iOiJ1c3VhcmlvMiIsImlkIjoiNjU1NDNlYTNiNGMzZmIxMWQ4YzBhZWMwIn0sImlhdCI6MTcwMDExNjkwNCwiZXhwIjoxNzAwMTI0MTA0fQ.nxrptkpi2ZrQvDIEZiGwMRvwmVwfAS_xHCXjbfjNnWA', // Reemplazar con tu token
    };

    try {
      await axios.delete(`http://localhost:8081/promociones/${promo.id_nombre_promocion}`, { headers });
      setPromociones((prevPromociones) => prevPromociones.filter((p) => p.id_nombre_promocion !== promo.id_nombre_promocion));
      onClose();
    } catch (error) {
      console.error('Error al eliminar la promo:', error);
    }
  };

  if (!promo) {
    return null; 
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex'
      }}>
        <Typography variant='h4' sx={{ mt: 2, mb: 3 }}>
          {promo.id_nombre_promocion}
        </Typography>

        <Button variant="outlined" color='error' sx={{ marginBottom: 2 }} onClick={deletePromo}>
          Eliminar {promo.id_nombre_promocion}
        </Button>
      </Box>
    </Modal>
  );
}
