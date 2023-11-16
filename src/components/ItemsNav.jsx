import React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
const primary = "#FFA424";

export default function ItemsNav({ pages }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      {Object.values(pages).map((item, index) => (
  
        <Link color="primary" to={`/productos/${item.id}`}>{item.tit}</Link>
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