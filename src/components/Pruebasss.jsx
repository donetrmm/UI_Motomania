import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import EncabezadoLeft from "./../components/admin/EncabezadoLeft";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const titulo = "Agregar Productos ";
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

const ContIn = () => {
  // Define aquí la lógica de ContIn si es necesario
  return <div>{/* Contenido de ContIn */}</div>;
};

const products = [
  { id: 1, name: "Cascos", propiedades: [{ type: "", label: "Talla" }] },
  {
    id: 2,
    name: "Maletas",
    propiedades: [{ type: "", label: "Capacidad" }],
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
];

export default function Pruebasss() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [talla, setTalla] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [tipoLlanta, setTipoLlanta] = useState("");
  const [rin, setRin] = useState("");
  const [medida, setMedida] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [compatibilidad, setCompatibilidad] = useState("Universal");
  const [color, setColor] = useState("");
  const [image, setImage] = useState(null);

  const handleProductChange = (event) => {
    const selectedProductId = parseInt(event.target.value);
    const product = products.find((p) => p.id === selectedProductId);
    setSelectedProduct(product);
    resetForm();
    setCompatibilidad("Universal");
  };

  const resetForm = () => {
    setCodigo("");
    setModelo("");
    setMarca("");
    setTalla("");
    setCapacidad("");
    setTipoLlanta("");
    setRin("");
    setMedida("");
    setDescripcion("");
    setCompatibilidad("Universal");
    setColor("");
    setImage(null);
  };

  const handleAttributeChange = (attribute, value) => {
    switch (attribute) {
      case "Talla":
        setTalla(value);
        break;
      case "Capacidad":
        setCapacidad(value);
        break;
      case "Tipo":
        setTipoLlanta(value);
        break;
      case "Rin":
        setRin(value);
        break;
      case "Medida":
        setMedida(value);
        break;
      case "Descripcion":
        setDescripcion(value);
        break;
      case "Compatibilidad":
        setCompatibilidad(value);
        break;
      case "Color":
        setColor(value);
        break;
      case "Codigo":
        setCodigo(value);
        break;
      case "Modelo":
        setModelo(value);
        break;
      case "Marca":
        setMarca(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    let categoria = selectedProduct.name.toLowerCase();
    if (categoria === "equipo personal") categoria = "equipo_personal";
    formData.append("codigo", codigo);
    formData.append("modelo", modelo);
    formData.append("marca", marca);
    formData.append("categoria", categoria);
    formData.append("talla", talla);
    formData.append("capacidad", capacidad);
    formData.append("tipo_llanta", tipoLlanta);
    formData.append("rin", rin);
    formData.append("medida", medida);
    formData.append("descripcion", descripcion);
    formData.append("compatibilidad", compatibilidad);
    formData.append("color", color);
    formData.append("imagen", image);

    if (!codigo || !modelo || !marca || !categoria) {
      toast.error("Llene los campos.");
      return;
    }

    if (!image) {
      toast.error("Seleccione una imagen.");
      return;
    }

    try {
      const token = sessionStorage.getItem("token");

      const headers = {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post(
        "http://localhost:8081/productos",
        formData,
        { headers }
      );

      toast.success(response.data.message);
    } catch (error) {
      toast.error("Error al crear producto.");
    }
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
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
        <Grid item={12}>
          <EncabezadoLeft encabezado={titulo} />
        </Grid>
        <Grid item={4}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Productos
            </InputLabel>
            <Select
              id={selectedProduct}
              value={"Productos"}
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
              <div key={propiedades.label}>
                {propiedades.label === "Talla" && (
                  <FormControl sx={{ margin: "10px" }}>
                    <InputLabel>{propiedades.label}</InputLabel>
                    <Select
                      label={propiedades.label}
                      sx={{ margin: "10px" }}
                      value={talla}
                      onChange={(e) =>
                        handleAttributeChange(propiedades.label, e.target.value)
                      }
                    >
                      <MenuItem value="XS">XS</MenuItem>
                      <MenuItem value="S">S</MenuItem>
                      <MenuItem value="M">M</MenuItem>
                      <MenuItem value="L">L</MenuItem>
                      <MenuItem value="XL">XL</MenuItem>
                      <MenuItem value="XXL">XXL</MenuItem>
                    </Select>
                  </FormControl>
                )}
                {propiedades.label !== "Talla" && (
                  <TextField
                    id={propiedades.label.toLowerCase()}
                    label={propiedades.label}
                    type={propiedades.type}
                    sx={{ margin: "10px" }}
                    onChange={(e) =>
                      handleAttributeChange(propiedades.label, e.target.value)
                    }
                  />
                )}
              </div>
            ))}
            <TextField
              id="codigo"
              label="Código"
              type="text"
              sx={{ margin: "10px" }}
              value={codigo}
              onChange={(e) => handleAttributeChange("Codigo", e.target.value)}
            />
            <TextField
              id="modelo"
              label="Modelo"
              type="text"
              sx={{ margin: "10px" }}
              value={modelo}
              onChange={(e) => handleAttributeChange("Modelo", e.target.value)}
            />
            <TextField
              id="marca"
              label="Marca"
              type="text"
              sx={{ margin: "10px" }}
              value={marca}
              onChange={(e) => handleAttributeChange("Marca", e.target.value)}
            />
            <div>
              <Button
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                component="label"
              >
                Subir imagen
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleImageChange}
                  name="imagen"
                />
              </Button>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProduct}
            >
              Agregar Producto
            </Button>
          </Grid>
        </>
      )}
    </>
  );
}
