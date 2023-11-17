import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function ModalDeleteproducts({product, open, onClose }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8081/productos?page=1&limit=10');
          setProducts(response.data.products);
        } catch (error) {
          console.error('Error al obtener los elementos', error);
        }
      };
      fetchData();
    }, []);
  
    const deleteproduct = async () => {
      const headers = {
        'Content-Type': 'application/json',
        Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InVzdWFyaW8iOiJ1c3VhcmlvMiIsImlkIjoiNjU1Mjc3OTQwYTg3YTZlNDY3NTFhNTMyIn0sImlhdCI6MTcwMDE1ODgzMywiZXhwIjoxNzAwMTY2MDMzfQ.lHOTjB38uzssm28e-LOTqrx_Hcdqqnq81lvz1Efjod8", // Reemplaza con tu token
    };
  
      try {
        await axios.delete(`http://localhost:8081/productos/${product.codigo}`, { headers });
        setProducts((prevPromociones) => prevPromociones.filter((p) => p.codigo !== product.codigo));
        onClose();
        window.location.assign('/AdministrarProductos');
      } catch (error) {
        console.error('Error al eliminar la product:', error);
      }
    };
  
    if (!product) {
      return null; 
    }
  return (
    <>
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
          {product.modelo}
        </Typography>

        <Button variant="outlined" color='error' sx={{ marginBottom: 2 }} onClick={deleteproduct}>
          Eliminar {product.modelo}
        </Button>
      </Box>
    </Modal>
    </>
  )
}
