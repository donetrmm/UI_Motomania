import React from 'react'
import { Typography,Box} from '@mui/material'
export default function TituloAdmin({titulo}) {
  return (
    <>
    <Box sx={{
      display:'flex',
      overflow:'hidden',
      justifyContent:'center'
    }}>
    <Typography variant="h2" gutterBottom sx={{textAlign:'center', wordWrap:'break-word',}}>
        {titulo}
    </Typography>
    </Box>

    </>
  )
}
