import React from 'react'
import { Typography } from '@mui/material'
export default function TituloMenuAdmin({nombre}) {
  return (
    <>
    <Typography variant='h5'>
        {nombre}
    </Typography>
    </>
  )
}
