import React from 'react'
import TextField from '@mui/material/TextField';
export default function InputNombre({ nombre, setNombre }) {
  return (
    <>
        <TextField 
         label='Nombre'
         type='text'
         onChange={(e) => setNombre(e.target.value)}
         value={nombre}
         sx={{ margin: "10px" }} />
    </>
  )
}
