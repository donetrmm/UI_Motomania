import React from 'react'
import { Card } from '@mui/material'
import BodyCards from './BodyCards'
export default function Cards({card}) {
  return (
    <>
    <Card
    sx={{
        height: "30em",
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
        <BodyCards card={card}/>
    </Card>
    </>
  )
}
