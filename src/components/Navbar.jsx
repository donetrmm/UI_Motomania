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
const pages = {
  item1: { tit: "CASCOS", href: "/productos" },
  item2: { tit: "MALETAS", href: "/prueba" },
  item3: { tit: "ACCESORIOS", href: "/ruta" },
  item4: { tit: "EQUIPO PERSONAL", href: "/ruta" },
  item5: { tit: "LLANTAS", href: "/ruta" },
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
