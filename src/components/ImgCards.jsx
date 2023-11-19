import React from 'react'
import styles from '../styles/Components.module.css'
export default function ImgCards({url,nombre}) {
  return (
    <>
    <img className={styles.img} src={`http://localhost:8081/public/images/${url}`} alt={nombre} height="175px"></img>
    </>
  )
}
