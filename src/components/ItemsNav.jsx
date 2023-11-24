import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
        main: "#FFA424",
    },
    black: {
      main: "#070503",
    },
  },
  Button: {
    fontFamily: ["Architects Daughter", "cursive  "].join(","),
  },
});
const primary = "#FFA424";

export default function ItemsNav({ pages }) {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  const handleTitleHover = (title) => {
    setHoveredTitle(title);
  };

  const handleTitleLeave = () => {
    setHoveredTitle(null);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = (produc) => {
    if(produc === 'cascos'){
      window.location.assign('/cascos')
    } else{
      localStorage.setItem('produc', produc);
      console.log('local item',produc)
      window.location.assign('/productos')
    }
   
    
  };
  return (
    <>
    <ThemeProvider theme={theme}>
    {Object.values(pages).map((item, index) => (
        <Button
          color="primary"
          sx={{ my: 2, display: "flex", color: primary,letterSpacing:'2px',fontSize:'14px',textAlign:'center',transition:'.5s all ease',
          opacity: hoveredTitle === 'Inicio' ? .5 : .5,
          '&:hover': {
            fontWeight:'bold',
            transform:'scale(1.4)',
            opacity:'4'
          },
      
        }}
        onMouseEnter={() => handleTitleHover('Inicio')}
          onMouseLeave={handleTitleLeave}
          onClick={() => handleClick(item.id)}
        >
          {item.tit}
        </Button>
      ))}
    </ThemeProvider>
     
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
