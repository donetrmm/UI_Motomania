import React from 'react'
import TextField from '@mui/material/TextField';
export default function InputApellido({apellido, setApellido}) {
  return (
      <>
              <TextField 
          label='Apellido'
          type='text'
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
          sx={{ margin: "10px" }} />
      </>
  )
}
