import React from 'react'
import { TextField } from '@mui/material'
export default function InputUsuario({usuario, setUsuario}) {
  return (
    <>
            <TextField 
         label='Usuario'
         type='text'
         onChange={(e) => setUsuario(e.target.value)}
         value={usuario}
         sx={{ margin: "10px" }} />
    </>
  )
}
