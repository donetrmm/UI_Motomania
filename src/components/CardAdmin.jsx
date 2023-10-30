import React from 'react'
import { Card,Link } from '@mui/material'
import BodyCardAdmin from './BodyCardAdmin'

export default function CardAdmin({card}) {
  return (
    <>
    <Link href={card.link} underline="none">
    <Card
    sx={{
        height: "22em",
        width: "20em",
        transition: "1s all ease",
        border: "1px solid #c5c3c6",
        margin: "10px",

        "&:hover": {
          border: "3px solid #FFA424",
          transform: "scale(1.1)",
          borderRadius: "20px",
        },
      }}
    >
        <BodyCardAdmin card={card}/>
    </Card>
    </Link>

    </>
  )
}
