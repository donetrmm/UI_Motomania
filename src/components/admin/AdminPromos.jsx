import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

    const [promociones, setPromociones] = useState([]);
    const [selectedPromo, setSelectedPromo] = React.useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8081/promociones?page=1&limit=10');
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
  
    const handleShowDetails = (promo) => {
      setShowModal(true);
      setSelectedPromo(promo);
    };
    const handleDeleteDetails = (promo) => {
        setDeletemodal(true);
        setSelectedPromo(promo);
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
                {promociones.map((promo) => (
                  <StyledTableRow key={promo.id}>
                    <StyledTableCell align="left">
                      {promo.id_nombre_promocion}
                      <img src={`http://localhost:8081/public/images/${promo.url_imagen_promocion}`} alt='logo' width="40%"></img>
                      </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Button onClick={() => handleShowDetails(promo)} variant="outlined" color="success" sx={{mt:'5px',mb:'5px'}}>
                        Editar
                      </Button>
                      <Button onClick={() => handleDeleteDetails(promo)} variant="outlined" color="error" sx={{mt:'5px',mb:'5px'}}>
                        Eliminar
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ModalEditPromos
            promo={selectedPromo}
            open={showModal}
            onClose={handleCloseModal}
          />
             <ModalDelete
            promo={selectedPromo}
            open={modalDelete}
            onClose={deleteCloseModal}
          />
        </div>
      </>
    );
}
