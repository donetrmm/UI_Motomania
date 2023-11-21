import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import ModalDeleteProductos from "./ModalDeleteProductos";
import { TextField,Typography } from "@mui/material";
import EditarProductoModal from "./EditarProductoModal"; // Asegúrate de importar tu componente EditarProductoModal
import axios from "axios";
import styles from "./../../styles/ejemAdmin.module.css";

const io = require("socket.io-client");

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const socket = io("http://localhost:8081");

export default function Ptabla() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalDelete, setDeletemodal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false); // Nuevo estado
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [promociones, setPromociones] = useState([]);
  const [connected, setConnected] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage, searchTerm]);

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    });

    socket.on("productoCreado", async (data) => {
      setPromociones((prevPromociones) => [
        data.nuevoProducto,
        ...prevPromociones,
      ]);
    });

    socket.on("productoActualizado", async (data) => {
      console.log("Producto actualizado recibido:", data);
      
      setPromociones((prevPromociones) => {
        if (!prevPromociones) {
          console.log("prevPromociones es undefined");
          return [];
        }
    
        return prevPromociones.map((product) =>
          product.codigo === data.codigo ? { ...data.producto } : product
        );
      });
    });
    

    socket.on("productoEliminado", async (data) => {
      setPromociones((prevPromociones) =>
        prevPromociones.filter(
          (producto) => producto.codigo !== data.producto.codigo
        )
      );
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("productoCreado");
      socket.off("productoActualizado");
      socket.off("productoEliminado");
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/productos?page=${
          page + 1
        }&limit=${rowsPerPage}&codigo=${searchTerm}`
      );
      setPromociones(response.data.productos);
      setTotalPages(response.data.totalPages);
      setTotalElements(response.data.totalProductos);
    } catch (error) {
      console.error("Error al obtener los elementos", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleShowDetails = (product) => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  const handleEditDetails = (product) => {
    setEditModalOpen(true);
    setSelectedProduct(product);
  };

  const handleDeleteDetails = (product) => {
    setDeletemodal(true);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteCloseModal = () => {
    setDeletemodal(false);
  };

  return (
    <>
      <div className={styles.contTable}>
        <Typography variant="h6" sx={{textAlign:'center'}}>
          Ingrese el codigo del producto a buscar
        </Typography>
        <TextField
          id="outlined-basic"
          label="Codigo"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ margin: 1,mb:'2em' }}
        />
        <TableContainer
          component={Paper}
          sx={{
            width: "60em",
            mb: "40px",
            "@media (max-width: 500px)": {
              width: "30em",
            },
          }}
        >

          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Código</StyledTableCell>
                <StyledTableCell align="left">Nombre</StyledTableCell>
                <StyledTableCell align="center">Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {promociones.length > 0 ? (
                promociones.map((promocion) => (
                  <StyledTableRow key={promocion.codigo}>
                    <StyledTableCell align="left">{promocion.codigo}</StyledTableCell>
                    <StyledTableCell align="left">{promocion.modelo}</StyledTableCell>
                    <StyledTableCell
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        onClick={() => handleEditDetails(promocion)} // Cambiado a handleEditDetails
                        variant="outlined"
                        color="success"
                        sx={{ mt: "5px", mb: "5px" }}
                      >
                        Editar
                      </Button>
                      <Button
                        onClick={() => handleDeleteDetails(promocion)}
                        variant="outlined"
                        color="error"
                        sx={{ mt: "5px", mb: "5px" }}
                      >
                        Eliminar
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <TableRow>
                  <StyledTableCell colSpan={3} align="center">
                    No hay productos disponibles.
                  </StyledTableCell>
                </TableRow>
              )}
            </TableBody>
            <TablePagination
              rowsPerPageOptions={[3, 5, 10, 25, 50, { label: "All", value: undefined }]}
              colSpan={3}
              count={totalElements}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>

        {/* Agregamos el modal de edición */}
        {editModalOpen && (
          <EditarProductoModal
            product={selectedProduct}
            onClose={() => setEditModalOpen(false)}
          />
        )}

        <ModalDeleteProductos
          product={selectedProduct}
          open={modalDelete}
          onClose={deleteCloseModal}
        />
      </div>
    </>
  );
}
