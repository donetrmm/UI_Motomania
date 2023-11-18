import React, { useState, useEffect } from "react";
import { TextField, Button, InputLabel, Select, MenuItem,Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";
import axios from "axios";

const EditarProductoModal = ({ product, onClose }) => {
  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [talla, setTalla] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [tipoLlanta, setTipoLlanta] = useState("");
  const [rin, setRin] = useState("");
  const [medida, setMedida] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [compatibilidad, setCompatibilidad] = useState("");
  const [color, setColor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [image, setImage] = useState(null);
  const [categoriaTitulo, setCategoriaTitulo] = useState("");

  useEffect(() => {
    // Actualiza los estados con los valores actuales del producto al cargar el modal
    setCodigo(product.codigo || "");
    setModelo(product.modelo || "");
    setMarca(product.marca || "");
    setTalla(product.talla || "");
    setCapacidad(product.capacidad || "");
    setTipoLlanta(product.tipo_llanta || "");
    setRin(product.rin || "");
    setMedida(product.medida || "");
    setDescripcion(product.descripcion || "");
    setCompatibilidad(product.compatibilidad || "");
    setColor(product.color || "");
    setCategoria(product.categoria || "");
    if(product.categoria === "equipo_personal"){
        setCategoriaTitulo('equipo personal');
    } else{
        setCategoriaTitulo(product.categoria);
    }
  }, [product]);

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
      case "Categoria":
        setCategoria(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleEditProduct = async () => {
    const formData = new FormData();
    let editarImagen = true;
    if(!image){
        editarImagen = false;
    }
    formData.append("codigoEditado", codigo);
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
    formData.append("editarImagen", editarImagen);


    try {
      const token = sessionStorage.getItem("token");
      const headers = {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.put(
        `http://localhost:8081/productos/${product.codigo}`,
        formData,
        { headers }
      );

      console.log("Producto editado:", response.data);
      onClose();
    } catch (error) {
      console.error("Error al editar el producto:", error);
    }
  };

  return (
    <Dialog open={true} onClose={onClose}>
    <DialogTitle>Editar {categoriaTitulo}: {codigo}</DialogTitle>
    <DialogContent>
    <div>
      <TextField
        id="codigo"
        label="Código"
        variant="outlined"
        fullWidth
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        sx={{ margin: 2 }}
      />
      <TextField
        id="modelo"
        label="Modelo"
        variant="outlined"
        fullWidth
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        sx={{ margin: 2 }}
      />
      <TextField
        id="marca"
        label="Marca"
        variant="outlined"
        fullWidth
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        sx={{ margin: 2 }}
      />

      {categoria === "cascos" && (
        <Select
          label="Talla"
          value={talla}
          onChange={(e) => handleAttributeChange("Talla", e.target.value)}
          sx={{ margin: 2 }}
        >
          <MenuItem value="XS">XS</MenuItem>
          <MenuItem value="S">S</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="L">L</MenuItem>
          <MenuItem value="XL">XL</MenuItem>
          <MenuItem value="XXL">XXL</MenuItem>
        </Select>
      )}

      {categoria === "maletas" && (
        <TextField
          id="capacidad"
          label="Capacidad"
          variant="outlined"
          fullWidth
          value={capacidad}
          onChange={(e) => handleAttributeChange("Capacidad", e.target.value)}
          sx={{ margin: 2 }}
        />
      )}

      {categoria === "llantas" && (
        <>
          <TextField
            id="tipoLlanta"
            label="Tipo"
            variant="outlined"
            fullWidth
            value={tipoLlanta}
            onChange={(e) => handleAttributeChange("Tipo", e.target.value)}
            sx={{ margin: 2 }}
          />
          <TextField
            id="rin"
            label="Rin"
            type="number"
            variant="outlined"
            fullWidth
            value={rin}
            onChange={(e) => handleAttributeChange("Rin", e.target.value)}
            sx={{ margin: 2 }}
          />
          <TextField
            id="medida"
            label="Medida"
            variant="outlined"
            fullWidth
            value={medida}
            onChange={(e) => handleAttributeChange("Medida", e.target.value)}
            sx={{ margin: 2 }}
          />
        </>
      )}

      {categoria === "accesorios" && (
        <>
          <TextField
            id="descripcion"
            label="Descripción"
            variant="outlined"
            fullWidth
            value={descripcion}
            onChange={(e) => handleAttributeChange("Descripcion", e.target.value)}
            sx={{ margin: 2 }}
          />
          <TextField
            id="compatibilidad"
            label="Compatibilidad"
            variant="outlined"
            fullWidth
            value={compatibilidad}
            onChange={(e) => handleAttributeChange("Compatibilidad", e.target.value)}
            sx={{ margin: 2 }}
          />
        </>
      )}

      {categoria === "equipo_personal" && (
        <>
          <TextField
            id="talla"
            label="Talla"
            variant="outlined"
            fullWidth
            value={talla}
            onChange={(e) => handleAttributeChange("Talla", e.target.value)}
            sx={{ margin: 2 }}
          />
          <TextField
            id="color"
            label="Color"
            variant="outlined"
            fullWidth
            value={color}
            onChange={(e) => handleAttributeChange("Color", e.target.value)}
            sx={{ margin: 2 }}
          />
        </>
      )}

      <input
        type="file"
        onChange={handleImageChange}
        name="imagen"
        accept="image/*"
        sx={{ margin: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleEditProduct}
        sx={{ margin: 2 }}
      >
        Editar Producto
      </Button>
    </div>
    </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" onClick={handleEditProduct}>
          Editar Producto
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarProductoModal;
