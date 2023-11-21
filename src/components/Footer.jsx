import React from 'react'
import { Grid } from "@mui/material";
import LogoFooter from './LogoFooter';
import Mapa from './Mapa'
import ContactosFooter from './ContactosFooter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const contactos = [
    {icono:WhatsAppIcon, link:'https://api.whatsapp.com/send/?phone=529612006324&text&type=phone_number&app_absent=0'},
    {icono:InstagramIcon, link:'https://www.instagram.com/motomaniaboutique/'},
    {icono:FacebookIcon, link:'https://www.facebook.com/profile.php?id=61550590326103'},
]
const logo = {
    src: "/logoBlack.jpg",
    alt: "logo",
    width: "200",
    height: "175",
  };
export default function Footer() {
  return (
    <>
      <Grid 
         container
         spacing={0}
         sx={{
           display: "flex",
           justifyContent: "space-around",
           alignItems: "center",
           textAlign: "center",
            pt:'10px',
            pb:'10px',
           border:'1px solid',
           overflow:'hidden',
           bgcolor:'black'
           
 
         }} 
      >
        <Grid item={3}> 
            <LogoFooter logo={logo} />
        </Grid>
        <Grid item={6}> 
            <Mapa />
        </Grid>
        <Grid item={3} sx={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        border:'1px solid'
    }}> 
            <ContactosFooter contactos={contactos} />
        </Grid>

      </Grid>
    </>
  )
}
