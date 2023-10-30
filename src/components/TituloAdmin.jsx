import React from 'react'
import { Typography } from '@mui/material'
export default function TituloAdmin({titulo}) {
  return (
    <>
    <Typography variant="h2">
        {titulo}
    </Typography>
    </>
  )
}
