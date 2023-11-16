import React from 'react'
import TextField from '@mui/material/TextField';

export default function InputLog({ label, type, ...rest}) {
 
  return (
    <>

         <TextField 
         label={label}
         type={type}
         {...rest}
         sx={{ margin: "10px" }} />

    </>
  )
}
