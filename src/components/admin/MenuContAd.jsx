import React from 'react'
import MenuItem from "@mui/material/MenuItem";
export default function MenuContAd({product}) {
  return (
    <>
    <MenuItem key={product.id} value={product.id}>
        {product.name}
    </MenuItem>
    </>
  )
}
