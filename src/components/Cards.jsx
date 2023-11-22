import React from 'react'
import { Card } from '@mui/material'
import BodyCards from './BodyCards'
import styles from '../styles/Components.module.css'
export default function Cards({card}) {
  return (
    <>
    <Card
    className={styles.Card}
    sx={{
      transition:'1s all ease',
      height:'35em',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;'
      },
    }}
    >
        <BodyCards card={card}/>
    </Card>
    </>
  )
}
