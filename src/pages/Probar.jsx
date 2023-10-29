import React from "react";
import { Grid, Card, Typography, CardContent } from "@mui/material";
import styles from "./../styles/ejem.module.css";

const cards = [
  {
    nombre: "Casco",
    url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
    atributos: ["atributo 1", "atributo 2", "atributo 3"],
  },
  {
    nombre: "Casco222",
    url: "https://cdn1.coppel.com/images/catalog/pm/5366033-1.jpg",
    atributos: ["atributo 11", "atributo 22", "atributo 33"],
  },

];

export default function Probar() {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "25px",
          border:'1px solid',

        }}
      >
        <>
          {cards.map((card) => (
            <Grid
              item={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Card
                sx={{
                  height: "30em",
                  width: "20em",
                  transition: "1s all ease",
                  border: "1px solid #c5c3c6",
                  margin: "10px",

                  "&:hover": {
                    border: "3px solid #FFA424",
                    transform: "scale(1.1)",
                    borderRadius: "20px",
                  },
                }}
              >
                <CardContent>
                  <img src={card.url} alt={card.nombre} height="175px"></img>
                  <Typography gutterBottom variant="h4">
                    {card.nombre}
                  </Typography>
                  <>
                    <div className={styles.contAtri}>
                      {card.atributos.map((atri, index) => (
                        <Typography variant="subtitle1" key={index}>
                          {atri}
                        </Typography>
                      ))}
                    </div>
                  </>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </>
      </Grid>
    </>
  );
}
