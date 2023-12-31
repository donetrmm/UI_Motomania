import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function ModalDelete({ promo, open, onClose }) {
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/promociones?page=1&limit=10"
        );
        setPromociones(response.data.promociones);
      } catch (error) {
        console.error("Error al obtener los elementos", error);
      }
    };
    fetchData();
  }, []);

  const deletePromo = async () => {
    const token = sessionStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };

    try {
      await axios.delete(
        `http://localhost:8081/promociones/${promo.id_nombre_promocion}`,
        { headers }
      );
      setPromociones((prevPromociones) =>
        prevPromociones.filter(
          (p) => p.id_nombre_promocion !== promo.id_nombre_promocion
        )
      );
      onClose();
      toast.success('Promoción eliminada.')
    } catch (error) {
      toast.error('Error al eliminar la promoción.')
      console.error("Error al eliminar la promoción:", error);
    }
  };

  if (!promo) {
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
            {promo.id_nombre_promocion}
          </Typography>
          <img
            src={`http://localhost:8081/public/images/${promo.url_imagen_promocion}`}
            alt={promo.id_nombre_promocion}
            width="200px"
          ></img>
          <Button
            variant="outlined"
            color="error"
            sx={{ marginBottom: 3, marginTop: 3 }}
            onClick={deletePromo}
          >
            Eliminar:{" "}
            <span style={{ fontWeight: "bold" }}>
              {promo.id_nombre_promocion}
            </span>
          </Button>
        </Box>
      </Modal>
    </>
  );
}
