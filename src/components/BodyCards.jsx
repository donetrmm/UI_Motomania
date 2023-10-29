import React from 'react'
import { CardContent } from '@mui/material'
import ImgCards from './ImgCards'
import TituloCards from './TituloCards'
import AtributosCards from './AtributosCards'
export default function BodyCards({card}) {
  return (
    <>
    <CardContent>
        <ImgCards url={card.url} nombre={card.nombre}/>    
        <TituloCards nombre={card.nombre}/>
        <AtributosCards card={card} />
    </CardContent>
    </>
  )
}
