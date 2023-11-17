import React from 'react'
import { Typography } from '@mui/material'
export default function TituloMenuAdmin({nombre}) {
  return (
    <>
    <Typography variant='h2' sx={{
      mb:'.7em',
      '@media (min-width:200px)': {
      fontSize:'30px'
      },
      '@media (min-width:400px)': {
        fontSize:'50px'
        },
  }}>
        {nombre}
    </Typography>
    </>
  )
}
