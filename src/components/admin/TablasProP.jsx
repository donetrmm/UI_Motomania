import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Button } from '@mui/material';
import Pmo from "./Pmo";
import ModalDelete from "./ModalDelete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Cupcake', 305,),
  createData('Donut', 452,),
  createData('Eclair', 262,),
  createData('Frozen yoghurt', 159),
  createData('Gingerbread', 356,),
  createData('Honeycomb', 408,),
  createData('Ice cream sandwich', 237,),
  createData('Jelly Bean', 375,),
  createData('KitKat', 518, ),
  createData('Lollipop', 392, ),
  createData('Marshmallow', 318,),
  createData('Nougat', 360, ),
  createData('Oreo', 437, ),
]

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

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [showModal, setShowModal] = React.useState(false);
  const [modalDelete, setDeletemodal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
  const handleDeleteDetails = (product) => {
    setDeletemodal(true);
    setSelectedProduct(product);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead>
              <TableRow>
                <StyledTableCell align="left">Nombre </StyledTableCell>
                <StyledTableCell align="center">Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : products
          ).map((product) => (
            <TableRow key={product.name}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
              <Button onClick={() => handleShowDetails(product)} variant="outlined" color="success" sx={{mt:'5px',mb:'5px'}}>
                      Editar
                    </Button>
                    <Button onClick={() => handleDeleteDetails(product)} variant="outlined" color="error" sx={{mt:'5px',mb:'5px'}}> 
                        Eliminar
                      </Button>
              </TableCell>

            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={products.length}
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
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}