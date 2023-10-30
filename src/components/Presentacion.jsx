import React from 'react'
import Titulo from './Titulo'
import Subtitulo from './Subtitulo'
import TituloHash from './TituloHash'
import styles from './../styles/Components.module.css'
export default function Presentacion({titulo,subtitulo,titulohash}) {
  return (
    <div className={styles.containerPresentacion}>
    <Titulo titulo={titulo}/>
    <Subtitulo subtitulo={subtitulo}/>
    <TituloHash titulohash={titulohash}/>
    </div>
  )
}
