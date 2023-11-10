import React from 'react'
import Select from "@mui/material/Select";
import MenuContAd from './MenuContAd';

export default function SelectAd({ selectedProductId, handleProductChange, products }) {
  return (
    <>
    <Select 
    value={selectedProductId}
    onChange={handleProductChange}
    >
    {products.map((product) => (
        <MenuContAd key={product.id} product={product} />
      ))}
    </Select>
    </>
  )
}
