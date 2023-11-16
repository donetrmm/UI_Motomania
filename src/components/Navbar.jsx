import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Logo from './Logo'
import MenuItemNav from "./MenuItemNav";
import ItemsNav from "./ItemsNav";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#070503",
    },
    orange: {
      main: "#FFA424",
    },
  },
});
const cards = [
  {
    id:'1',
    nombre: "Casco",
    url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
    atributos: ["atributo 1", "atributo 2", "atributo 3"],
  },
  {
    id:'2',
    nombre: "Casco222",
    url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
    atributos: ["atributo 11", "atributo 22", "atributo 33"],
  },
  
];

const pages = {
  item1: { id:1,tit: "cascos", href: "/productos" },
  item2: { id:2,tit: "maletas", href: "/productos" },
  item3: { id:3,tit: "accesorios", href: "/productos" },
  item4: { id:4,tit: "equipo personal", href: "/productos" },
  item5: { id:5,tit: "llantas", href: "/productos" },
};

const logo = {
    src: "/logoBlack.jpg",
    alt: "logo",
    width: "150",
    height: "125",
  };
export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  return (
    <ThemeProvider theme={theme}>
    <div>
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Logo logo={logo} />

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <Box sx={{
            display:'flex',
            width:'100%',
            justifyContent:'flex-end'
          }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
         
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItemNav pages={pages} />
            
          </Menu>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "none",
              md: "flex",
              justifyContent: "space-evenly",
              paddingLeft: "20px",
              paddingRight: "20px",
            },
          }}
        >
          <ItemsNav pages={pages} />
       
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
    </div>
</ThemeProvider>
  )
}
