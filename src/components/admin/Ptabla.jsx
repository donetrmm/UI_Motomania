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
import styles from './../../styles/ejemAdmin.module.css'
import axios from 'axios';



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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Ptabla() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [modalDelete, setDeletemodal] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  
  const [promociones, setPromociones] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/promociones?page=1&limit=1');
        setPromociones(response.data.promociones);
        console.log("dataaaa")
        console.log(response.data)
        console.log('data url',response.data.promociones.url_imagen_promocion)
        response.data.promociones.forEach(promocion => {
          console.log('for each',promocion.url_imagen_promocion)
        });
      } catch (error) {
        console.log("NO chingao no paso")
        console.error('Error al obtener los elementos', error);
      }
    };
    fetchData();
  }, []);

  const products = [
    { id: 1, name: "Casco ktm", propiedades: [{ type: "", label: "Talla" }] },
    {
      id: 2,
      name: "Maleta hamilton",
      propiedades: [{ type: "number", label: "Capacidad" }],
    },
    {
      id: 3,
      name: "Llanta pirelli",
      propiedades: [
        { type: "", label: "Tipo" },
        { type: "number", label: "Rin" },
        { type: "", label: "Medida" },
      ],
    },
    { id: 1, name: "Casco ktm", propiedades: [{ type: "", label: "Talla" }] },
    {
      id: 2,
      name: "Maleta hamilton 2",
      propiedades: [{ type: "number", label: "Capacidad" }],
    },
    {
      id: 3,
      name: "Llanta pirelli 2",
      propiedades: [
        { type: "", label: "Tipo" },
        { type: "number", label: "Rin" },
        { type: "", label: "Medida" },
      ],
    },
  ];

  const handleShowDetails = (product) => {
    setShowModal(true);
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
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;
  };
  return (
    <>
      <div className={styles.contTable}>
        <TableContainer
          component={Paper}
          sx={{
            width: "60em",
            marginTop:'40px',
            "@media (max-width: 500px)": {
              width: "30em",
            },
          }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Nombre </StyledTableCell>
                <StyledTableCell align="center">Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <StyledTableRow key={product.id}>
                  <StyledTableCell align="left">{product.name}</StyledTableCell>
                  <StyledTableCell
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Button onClick={() => handleShowDetails(product)} variant="outlined" color="success" sx={{mt:'5px',mb:'5px'}}>
                      Editar
                    </Button>
                    <Button onClick={() => handleDeleteDetails(product)} variant="outlined" color="error" sx={{mt:'5px',mb:'5px'}}> 
                        Eliminar
                      </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
                   <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={products.length}
              rowsPerPage={rowsPerPage}
              page={page}
              /* corrunt page*/ 
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
             
            />
            </TableBody>
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
