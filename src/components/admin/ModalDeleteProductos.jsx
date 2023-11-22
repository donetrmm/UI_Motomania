import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function ModalDeleteProducts({ product, open, onClose }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/productos?page=1&limit=10"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error al obtener los elementos", error);
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async () => {
    const token = sessionStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    try {
      await axios.delete(`http://localhost:8081/productos/${product.codigo}`, {
        headers,
      });
      onClose();
      toast.success('Producto eliminado.')
    } catch (error) {
      toast.error('Error al eliminar producto.')
      console.error("Error al eliminar el producto:", error);
    }
  };

  if (!product) {
    return null;
  }

  return (
    <>
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
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <Typography variant="h4" sx={{ mt: 2, mb: 3 }}>
            {product.modelo}
          </Typography>
          <img
            src={`http://localhost:8081/public/images/${product.url_imagen}`}
            alt={product.modelo}
            width="150px"
          ></img>

          <Button
            variant="contained"
            color="error"
            sx={{ marginBottom: 2, marginTop: "1em" }}
            onClick={deleteProduct}
          >
            Eliminar:{" "}
            <span style={{ fontWeight: "bold" }}> {product.modelo}</span>
          </Button>
          <Button onClick={onClose} variant="outlined" color="error">
            Cancelar
          </Button>
        </Box>
      </Modal>
    </>
  );
}
