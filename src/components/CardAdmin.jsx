import React from 'react'
import { Card,Link } from '@mui/material'
import BodyCardAdmin from './BodyCardAdmin'

export default function CardAdmin({card}) {
  return (
    <>
    <Link href={card.link} underline="none">
    <Card
    sx={{

        transition: "1s all ease",
        border: "1px solid #c5c3c6",
        margin: "10px",
        '@media (min-width:200px)': {
        
          width:'13em',
          height:'18em',
          
        },
        '@media (min-width:400px)': {
        
          height: "25em",
          width: "20em",
          
        },

        "&:hover": {
          border: "3px solid #FFA424",
          transform: "scale(1.1)",
          borderRadius: "20px",
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;'
        },
      }}
    >
        <BodyCardAdmin card={card}/>
    </Card>
    </Link>

    </>
  )
}
