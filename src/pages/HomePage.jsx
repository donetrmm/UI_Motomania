import React from "react";
import Navbar from "./../components/Navbar";
import ImgCompo from "../components/ImgCompo";
import Presentacion from "../components/Presentacion";
import Footer from "../components/Footer";
import styles from '../styles/Pages.module.css'
import ImgPromos from "../components/ImgPromos";

const pages = {
  item1: { tit: "CASCOS", href: "/productos" },
  item2: { tit: "MALETAS", href: "/pro" },
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
const imgMain = {
  src: "/imgPageMain.png",
  alt: "banner",
};
const titulo = "“viajar en moto significa vivir con pasión”";
const subtitulo =
  "Por eso en motomania nos preocupamos por brindarte los mejores accesorios, a precios accesibles, para que complementes tu estilo y al mismo tiempo vayas seguro a todas partes.";
const titulohash = "#somoscomplicesdeturodada";
const imgPromo1 = {
  src: "/imgPagePromo.png",
  alt: "promo",
};
export default function HomePage() {

  return (
    <>

      <Navbar />
      <main className={styles.main}>
        <ImgCompo imgCompo={imgMain} />
        <Presentacion
          titulo={titulo}
          subtitulo={subtitulo}
          titulohash={titulohash}
        />
        <ImgPromos />
        <Footer />
      </main>
   
     
    </>
  );
}
