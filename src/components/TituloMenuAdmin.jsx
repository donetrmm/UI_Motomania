import React from 'react'
import { Typography } from '@mui/material'
export default function TituloMenuAdmin({nombre}) {
  return (
    <>
    <Typography variant='h2' sx={{mb:'.7em'}}>
        {nombre}
    </Typography>
    </>
  )
}
