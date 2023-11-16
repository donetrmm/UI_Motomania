import React from 'react'
import styles from './../styles/Components.module.css'
export default function LinksFooter({contactos}) {
  return (
    <>
    {contactos.map((contacto) => (
        <a href={contacto.link} target='blank' className={styles.linkFooter}>
                <contacto.icono fontSize='large' color='warning' />
        </a>

    ))}
    </>
  )
}
