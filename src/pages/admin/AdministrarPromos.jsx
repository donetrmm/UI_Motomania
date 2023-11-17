import React from 'react'
import Navbar from './../../components/Navbar'
import AdminPromos from '../../components/admin/AdminPromos'
import EncabezadoLeft from './../../components/admin/EncabezadoLeft'
const encabezado = 'Administrar Promociones'
export default function AdministrarPromos() {
  return (
    <>
    <Navbar />
    <main>
      <EncabezadoLeft encabezado={encabezado} />
    <AdminPromos />
    </main>
    </>
  )
}
