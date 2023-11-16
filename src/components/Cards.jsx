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
      transition:'1s all ease'
    }}
    >
        <BodyCards card={card}/>
    </Card>
    </>
  )
}
