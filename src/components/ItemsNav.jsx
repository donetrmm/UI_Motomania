import React from "react";
import Button from "@mui/material/Button";
import Productos from "../pages/Productos";
import { Link } from "react-router-dom";
const primary = "#FFA424";

export default function ItemsNav({ pages }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = (produc) => {
    localStorage.setItem('produc', produc);
    window.location = '/Productos';
  };
  return (
    <>
      {Object.values(pages).map((item, index) => (
        <Button
          href={item.href}
          color="primary"
          sx={{ my: 2, display: "block", color: primary }}
          onClick={() => handleClick(item.id)}
        >
          {item.tit}
        </Button>
      ))}
    </>
  );
}
/** 
 *       <Button
          href={item.href}
          color="primary"
          sx={{ my: 2, display: "block", color: primary }}
        >
          {item.tit}
        </Button>
 * **/
