import React, { useEffect, useState } from 'react';
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
  const [promociones, setPromociones] = useState([]);
  const [id_nombre_promocion , setId_nombre_promocion] = useState('');
  const [imagen, setImagen] = useState('');

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
  const handleFotoChange = (e) => {
    console.log('imagen charge')
    setImagen(e.target.files[0]);
  };



  const editarPromo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('imagen', imagen);

    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InVzdWFyaW8iOiJ1c3VhcmlvMiIsImlkIjoiNjU1Mjc3OTQwYTg3YTZlNDY3NTFhNTMyIn0sImlhdCI6MTcwMDEyMTg3MywiZXhwIjoxNzAwMTI5MDczfQ.mWon9ytfVgCfv8v_7r40Jb2HyQu5x0gyjRm6uuJGoeU', // Reemplazar con tu token
    };

    try {
      await axios.put(`http://localhost:8081/promociones/${promo.id_nombre_promocion}`, formData , { headers } );
      setPromociones((prevPromociones) => prevPromociones.filter((p) => p.id_nombre_promocion !== promo.id_nombre_promocion));
      console.log('segun actualizo')
      onClose();
    } catch (error) {
      console.log('no quiere')
      console.error('Error al editar la promo:', error);
    }
  };




    if (!promo) {
        return null; // Si no hay promoo seleccionado, no renderizar el modal
      }
  return (
<Modal open={open} onClose={onClose}>
  <form  onSubmit={editarPromo}>

  
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
          {promo.id_nombre_promocion}
        </Typography>
        <TextField
              id="outlined"
              label={promo.id_nombre_promocion}
              value={promo.id_nombre_promocion}
              sx={{margin:'10px'}}
            />
            <Button component="label" variant="contained" onChange={handleFotoChange} startIcon={<CloudUploadIcon />}>
      Subir Imagen
      <VisuallyHiddenInput type="file" />
    </Button>
      <Button variant='contained' color='success' sx={{mt:'10px',mb:'10px'}} >
        Editar
      </Button>
      </Box>
      </form>
    </Modal>
  )
}
