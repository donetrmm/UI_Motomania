import React, { useState } from 'react';
import Ptabla from './Ptabla';
import Pmo from './Pmo';
export default function AdPrueba() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const products = [
      { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1' },
      { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2' },
      { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3' },
    ];
  

  return (
    <div>
      <Ptabla/>
      
    </div>
  )
}
