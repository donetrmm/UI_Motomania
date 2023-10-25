import React from "react";
import Navbar from "./../components/Navbar";
import ImgCompo from "../components/ImgCompo";
import Presentacion from "../components/Presentacion";
import styles from "./../styles/ejem.module.css";

const imgMain = {
  src: "/imgPageMain.png",
  alt: "banner",
};
const titulo = "“viajar en moto significa vivir con pasion”";
const subtitulo =
  "Por eso en motomania nos preocupamos por brindarte los mejores accesorios, a precios accecibles, para que complementes tu estilo y al mismo tiempo vayas seguro a todas partes.";
const titulohash = "#somoscomplicesdeturodada";
const imgPromo1 = {
  src: "/imgPagePromo.png",
  alt: "promo",
};
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <ImgCompo imgCompo={imgMain} />

        <Presentacion
          titulo={titulo}
          subtitulo={subtitulo}
          titulohash={titulohash}
        />

        <ImgCompo imgCompo={imgPromo1} />
      </main>
    </>
  );
}
