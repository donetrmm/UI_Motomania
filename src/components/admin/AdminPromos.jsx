import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Pmo from "./Pmo";
import ModalEditPromos from "./ModalEditPromos";
import ModalDelete from "./ModalDelete";
import styles from './../../styles/ejemAdmin.module.css'
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
export default function AdminPromos() {
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);
    const [modalDelete, setDeletemodal] = React.useState(false);
  
    const products = [
      { id: 1, name: "Promocion Lunes", propiedades: [{ type: "", label: "Talla" }] },
      {
        id: 2,
        name: "Promocion Maletas",
        propiedades: [{ type: "number", label: "Capacidad" }],
      },
      {
        id: 3,
        name: "Promocion Llantas pirelli",
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
                      <Button onClick={() => handleShowDetails(product)}>
                        Editar
                      </Button>
                      <Button onClick={() => handleDeleteDetails(product)}>
                        Eliminar
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ModalEditPromos
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
