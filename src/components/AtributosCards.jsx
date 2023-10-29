import React from "react";
import styles from "./../styles/ejem.module.css";
import TextAtributoCards from "./TextAtributoCards";
export default function AtributosCards({ card }) {
  return (
    <>
      <div className={styles.contAtri}>
        {card.atributos.map((atri) => (
            <TextAtributoCards atri={atri} />
        ))}
      </div>
    </>
  );
}
