import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
const primary = "#FFA424";

export default function MenuItemNav({ pages }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      {Object.values(pages).map((item, index) => (
        <MenuItem
          key={pages}
          onClick={handleCloseNavMenu}
          sx={{
            backgroundColor: "#000000",
            boxSizing: "border-box",
            marginTop: "-9px",
            marginBottom: "-9px",
            justifyContent:'flex-end'
          }}
        >
          <Button
            variant="text"
            href={item.href}
            sx={{
              color: primary,
              margin: "3px",
              border: "1px solid",
            }}
          >
            {item.tit}
          </Button>
        </MenuItem>
      ))}
    </>
  );
}
