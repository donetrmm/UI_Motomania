import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

export default function Pruebasss() {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
        { type: "", label: "Descripcion" },
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
    const selectedProductId = parseInt(event.target.value);
    const product = products.find((p) => p.id === selectedProductId);
    setSelectedProduct(product);
  };

  return (
    <>
      <Grid item={6} sx={{ minWidth: 120 }}>
        <h2>Selecciona tus productos</h2>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Productos
          </InputLabel>
          <Select
            value="Productos"
            label="Productos"
            onChange={handleProductChange}
          >
            {products.map((product) => (
              <MenuItem key={product.id} value={product.id}>
                {product.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        
      </Grid>

      {selectedProduct && (
        <Grid item={6}>
          <h2>{selectedProduct.name}</h2>
          {selectedProduct.propiedades.map((propiedades) => (
            <TextField
              id="outlined"
              label={propiedades.label}
              type={propiedades.type}
              sx={{margin:'10px'}}
            />
          ))}
        </Grid>
      )}

    </>
  );
}
