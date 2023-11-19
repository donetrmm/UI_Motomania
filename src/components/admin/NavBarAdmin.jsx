import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../Logo";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";

import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const pages = ["Products", "Pricing", "Blog"];
const settings = [
  { icono: PersonAddIcon, link: "/IniciarSesion" },
  { icono: LogoutIcon, link: "/IniciarSesion" },
];
const oragn = "#FFA424";
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
const logo = {
  src: "/logoBlack.jpg",
  alt: "logo",
  width: "145",
  height: "120",
  link: "/HomeAdmin",
};

export default function NavBarAdmin() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const outToken = () => {
    sessionStorage.removeItem("token");
    window.location.assign("/IniciarSesion");
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ boxSizing: "border-box" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid
              item={12}
              sx={{
                flexGrow: 0,
                display: {
                  xs: "column",
                  md: "flex",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  width: "100%",
                },
              }}
            >
              <Grid item={6}>
                <Logo logo={logo} />
              </Grid>

              <Grid
                item={6}
                sx={{
                  display: {
                    xs: "column",
                    md: "flex",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                    "@media (min-width:900px)": {
                      display: "flex",
                    },
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mr: "30px",
                    fontSize: "50px",
                    color: "#FFA424",

                    "@media (min-width:150px)": {
                      fontSize: "10px",
                      mr: "5px",
                    },
                    "@media (min-width:370px)": {
                      fontSize: "30px",
                      mr: "30px",
                    },
                  }}
                >
                  Catalogo
                </Typography>
                <Tooltip title="Mas Opciones">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar
                      sx={{
                        bgcolor: "#000000",
                        transition: ".5s all ease",
                        "&:hover": {
                          color: "#FFA424",
                        },
                      }}
                      variant="rounded"
                    >
                      <PersonIcon sx={{ fontSize: "40px" }} />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Grid>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  sx={{
                    flexDirection: "column",
                  }}
                  onClick={handleCloseUserMenu}
                >
                  <a href="/IniciarSesion">
                    <PersonAddIcon fontSize="large" color="orange" />
                  </a>

                  <div>
                    <LogoutIcon
                      fontSize="large"
                      color="orange"
                      onClick={outToken}
                    />
                  </div>
                </MenuItem>
              </Menu>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
