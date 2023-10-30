import React from 'react'
import { CardContent } from '@mui/material'
import IconMenuAdmin from './IconMenuAdmin'
import TituloMenuAdmin from './TituloMenuAdmin'
export default function BodyCardAdmin({card}) {
  return (
    <>
    <CardContent>
        <TituloMenuAdmin nombre={card.nombre} />
        <IconMenuAdmin url={card.url} nombre={card.nombre} />
    </CardContent>
    </>
  )
}
