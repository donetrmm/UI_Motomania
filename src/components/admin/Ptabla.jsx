import React, { useEffect, useState } from 'react';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TablePagination from '@mui/material/TablePagination';
import Pmo from "./Pmo";
import ModalDelete from "./ModalDelete";
import styles from './../../styles/ejemAdmin.module.css';
import axios from 'axios';

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [promociones, setPromociones] = useState([]);
  const [connected, setConnected] = useState(false);


  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage]);
  
  useEffect(() => {
    // Evento que se dispara cuando el socket se conecta
    socket.on('connect', () => {
      setConnected(true);
    });

    // Evento que se dispara cuando el socket se desconecta
    socket.on('disconnect', () => {
      setConnected(false);
    });

    // Evento que se dispara cuando se crea un nuevo producto
    socket.on('productoCreado', (data) => {
      setPromociones((prevPromociones) => [data.nuevoProducto, ...prevPromociones]);
    });

    // Evento que se dispara cuando se actualiza un producto
    socket.on('productoActualizado', (data) => {
      setPromociones((prevPromociones) =>
        prevPromociones.map((producto) =>
          producto.codigo === data.producto.codigo ? data.producto : producto
        )
      );
    });

    // Evento que se dispara cuando se elimina un producto
    socket.on('productoEliminado', (data) => {
      setPromociones((prevPromociones) =>
        prevPromociones.filter((producto) => producto.codigo !== data.producto.codigo)
      );
    });

    // Limpiar los eventos cuando el componente se desmonta
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('productoCreado');
      socket.off('productoActualizado');
      socket.off('productoEliminado');
    };
  }, []);
  

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/productos?page=${page + 1}&limit=${rowsPerPage}`);
      setPromociones(response.data.productos);
      setTotalPages(response.data.totalPages);
      setTotalElements(response.data.totalProductos);
      console.log(response)

    } catch (error) {
      console.error('Error al obtener los elementos', error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Asegúrate de reiniciar la página al cambiar la cantidad de elementos por página
  };

  const handleShowDetails = (product) => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  const handleDeleteDetails = (product) => {
    console.log(product)
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
      <div>
        Estado del socket: {connected ? 'Conectado' : 'Desconectado'}
      </div>
      <div className={styles.contTable}>
        <TableContainer
          component={Paper}
          sx={{
            width: "60em",
            marginTop: '40px',
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
                      <Button onClick={() => handleShowDetails(promocion)} variant="outlined" color="success" sx={{ mt: '5px', mb: '5px' }}>
                        Editar
                      </Button>
                      <Button onClick={() => handleDeleteDetails(promocion)} variant="outlined" color="error" sx={{ mt: '5px', mb: '5px' }}>
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
              rowsPerPageOptions={[3, 5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={totalElements}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>
        <Pmo
          product={selectedProduct}
          open={showModal}
          onClose={handleCloseModal}
        />
        <ModalDelete
          product={selectedProduct}
          open={modalDelete}
          onClose={deleteCloseModal}
        />
      </div>
    </>
  );
}

