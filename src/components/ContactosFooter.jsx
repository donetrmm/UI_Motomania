import React from 'react'
import { Box, Typography } from '@mui/material';
import LinksFooter from './LinksFooter';
export default function ContactosFooter({contactos}) {
  return (
    <Box>
        <Typography variant='h4' sx={{color:'azure',textTransform:'uppercase',letterSpacing:'2px'}}>
        Contáctanos
        </Typography>
          <Box sx={{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column'
          }}>
            <LinksFooter contactos={contactos} />
        </Box>
    </Box>
  )
}
