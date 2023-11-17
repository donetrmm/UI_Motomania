import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { Typography,Button } from "@mui/material";
import ContIn from "./ContIn";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import EncabezadoLeft from './../components/admin/EncabezadoLeft'
const titulo = "Agregar Productos "
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
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
      <Grid
        item={12}
        sx={{
          minWidth: 120,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid item={12}>
        <EncabezadoLeft encabezado={titulo} />
        </Grid>
        <Grid item={4}>
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

        <ContIn />
      </Grid>

      {selectedProduct && (
        
        <>
          <Grid item={6}>
            <Typography
              variant="h4"
              sx={{
                backgroundColor: "orange",
                ml: "11%",
                mr: "11%",
                mt: ".4em",
                mb: ".4em",
                borderRadius: "30px 30px 0px 0px",
              }}
            >
              {selectedProduct.name}
            </Typography>
            {selectedProduct.propiedades.map((propiedades) => (
              <TextField
                id="outlined"
                label={propiedades.label}
                type={propiedades.type}
                sx={{ margin: "10px" }}
              />
            ))}
            <>
            <div>
        <Button variant="outlined" startIcon={<CloudUploadIcon />}>
          Subir imagen
          <VisuallyHiddenInput type="file" />
        </Button>
      </div>
            </>
          </Grid>
        </>
      )}
    </>
  );
}
