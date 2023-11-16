import React from 'react'
import FormControl from "@mui/material/FormControl";
import InputLabelAd from './InputLabelAd';
import SelectAd from './SelectAd';
export default function FormAd({ value, label, onChange, products }) {
  return (
<FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabelAd />
      <SelectAd value={value} label={label} onChange={onChange} products={products} />
    </FormControl>
  )
}
