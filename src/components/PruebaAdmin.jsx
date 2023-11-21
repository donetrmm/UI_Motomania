import React from "react";
import Ptabla from "./admin/Ptabla";
import EncabezadoLeft from "./admin/EncabezadoLeft";
const encabezado = "Administrar Productos";
export default function PruebaAdmin() {
  return (
    <>
      <main>
        <EncabezadoLeft encabezado={encabezado} />
        <Ptabla />
      </main>
    </>
  );
}
