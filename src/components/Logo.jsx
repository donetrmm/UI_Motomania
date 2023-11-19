import React from 'react'
import styles from '../styles/Components.module.css'
export default function Logo({logo,}) {
  return (
    <>
    <a href={logo.link} className={styles.linkImg}>
    <img
    src={logo.src}
    alt={logo.alt}
    width={logo.width}
    height={logo.height}
    >
    </img>
    </a>

    </>
  )
}
