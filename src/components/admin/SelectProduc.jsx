import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import FormAd from "./FormAd";
import TextFieldAd from "./TextFieldAd";
import SelectAd from "./SelectAd";
export default function SelectProduc() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductId, setSelectedProductId] = useState(""); 

    const [products] = useState([
      { id: 1, name: "Cascos", propiedades: [{ type: "", label: "Talla" }] },
      {
        id: 2,
        name: "Maletas",
        propiedades: [{ type: "number", label: "Capacidad" }],
      },
      {
        id: 3,
        name: "Llantas",
        propiedades: [
          { type: "", label: "Tipo" },
          { type: "number", label: "Rin" },
          { type: "", label: "Medida" },
        ],
      },
      {
        id: 4,
        name: "Accesorios",
        propiedades: [
          { type: "", label: "Descripción" },
          { type: "", label: "Compatibilidad" },
        ],
      },
      {
        id: 5,
        name: "Equipo Personal",
        propiedades: [
          { type: "", label: "Talla" },
          { type: "", label: "Color" },
        ],
      },
    ]);
  
    const handleProductChange = (event) => {
        console.log('algo');
        const selectedProductId = event.target.value;
        const product = products.find((p) => p.id.toString() === selectedProductId);
        setSelectedProduct(product);
        setSelectedProductId(selectedProductId);
      };
  
  return (
    <>
    <Grid item={6} sx={{ minWidth: 120 }}>
      <h2>Selecciona tus productos</h2>
        <SelectAd 
         selectedProductId={selectedProductId}
         handleProductChange={handleProductChange}
         products={products}
        />
    </Grid>

    {selectedProduct && (
      <Grid item={6}>
        <h2>{selectedProduct.name}</h2>
        {selectedProduct.propiedades.map((propiedades, index) => (
          <TextFieldAd key={index} propiedades={propiedades} />
        ))}
      </Grid>
    )}
  </>
  )
}
